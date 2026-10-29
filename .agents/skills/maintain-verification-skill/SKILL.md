---
name: maintain-verification-skill
description: "Keep verify-elements and the component feature maps honest as components change: read each mapped component's source in parallel, drive every map's recipes live, and ship at most one set of proven corrections. Use after component changes, before a release, or when asked to audit the verify skill."
disable-model-invocation: true
---

# Maintain the verification skill

Adapted from `maintain-verification-skill` in [pstack](https://github.com/cursor/plugins/tree/main/pstack) by Lauren Tan (MIT).

A feature map goes stale the moment a component changes. This skill is the upkeep loop for what `create-verification-skill` generated:

- the skill and CLI in `.agents/skills/verify-elements/`;
- the playground in `playground/`;
- the map format and shared conventions in `.agents/skills/verify-elements/feature-maps.md`;
- one map per component: `packages/<name>/AGENTS.md` and one file per feature in `packages/<name>/features/`.

The unit of rigor is the feature file: cover every feature file from source, and run every command block in every map live.

If `.agents/skills/verify-elements/` doesn't exist, stop and point at `create-verification-skill` instead of inventing a target.

Argument: optional component names to limit the pass, such as `combobox`. Without one, cover every mapped component.

## Outcomes

Pick one and say which:

- **clean:** every component got source and live coverage, and nothing needs changing. No branch.
- **changed:** one branch with proven corrections to maps, `feature-maps.md`, the CLI or the playground.
- **blocked:** coverage couldn't finish, or a proven fix couldn't land safely. Say exactly what blocked it.

## Edit scope

Edit only `.agents/skills/verify-elements/`, `playground/`, `packages/*/AGENTS.md` and `packages/*/features/`. Never edit product code. The harness code has no comments, except one-line notes on behavior forced by something we can't change, such as a browser, Vite or Playwright quirk. When a harness fix needs explaining, update the `README.md` next to the code. If a map describes behavior the component no longer has, decide which it is:

- **doc drift:** the map is wrong. Fix the map.
- **product regression:** the component is wrong. Report it, and don't paper over it in the map.

## Pass

0. **Read the conventions.** Read `verify-elements/SKILL.md` and `feature-maps.md` in full before anything else.

1. **Index hygiene.** For each component, compare the `Features` section of its `AGENTS.md` with the files in its `features/` folder. Fix missing, extra, duplicate or dead entries. Split or merge files that are outside the line budgets in `feature-maps.md`.

2. **Source wave.** Use one read-only helper per feature file, plus one per component `AGENTS.md`, in parallel if your tool can run subagents, otherwise one after another. Each helper reads the component's source, JSDoc, `docs/`, tests and stories for its file, and returns:
   - a summary of what the component does now;
   - the source entry points (files and handlers);
   - likely drift, with file and line citations, or "none". Drift includes attributes, properties, events or keyboard behavior missing from `Sub-features`, bullets marked `no test` that a test now covers, unmarked bullets that no test covers, and stories a bullet names that no longer exist;
   - one recipe for checking the drift live.

   Helpers never drive the browser and never edit files.

3. **Reconcile.**
   - Every feature file and `AGENTS.md` has a returned summary.
   - Merge the recipes into as few mounts as practical.
   - Spot-check the cited drift. Don't re-prove claims that came back clean.
   - Then check recent changes: for each component, list the commits since its map was last changed. Find that commit with `git log -1 --format=%H -- packages/<name>/AGENTS.md packages/<name>/features`, then run `git log <that commit>..HEAD -- packages/<name>/`. Include the packages it imports or renders; the combobox renders `w-textfield`, so textfield changes count. Call a user-facing behavior missing only when you can name the source line.

4. **Live pass.** This step is required even when the source looks clean. Start with `ctl check` on every component's `AGENTS.md` and feature files: it runs every block in its own session and lists the commands that fail. Investigate each failure, and read the results of passing blocks against the end states the files describe, since `check` only proves the commands run. Then run `ctl check --browser all` on the same files: a difference between engines is either an engine quirk, which goes in `debugging.md` or the feature file's gotchas, or a product bug, which you report. Then start one `ctl up` session for the recipes from step 3 and drive it serially yourself; never let helpers drive. The recipes in the map are what the next agent will copy, so they're what must not rot.

   Hold three rules for the whole pass, whatever fails:
   - **Health-check before trusting the session.** Run `ctl doctor` before the first drive and after any failed drive. If the page is in a confused state that doctor can't see, mount again or restart the session rather than hoping.
   - **Evidence survives.** Check that every screenshot you rely on still exists at its path after each cleanup.
   - **Leave nothing running.** `ctl down` at the end, and after any attempt that left the session broken. Never kill by process name.

   A doctor failure caused by a stale skill is drift: fix it within the edit scope and retry once before calling the pass blocked. A behavior that can't be reached is unreachable only when you can name the missing prerequisite and the route you tried. If the map doesn't mention that prerequisite, that's drift too.

5. **Triage.** Sort every finding into one of four kinds:
   - **Doc drift:** a description or recipe is wrong or missing. Fix the map.
   - **Harness gap:** the component works, but `ctl` or the playground can't drive it. Fix the harness, document how to use it in `verify-elements/SKILL.md` and how it works in `verify-elements/README.md`, and drive the fix live again before keeping it.
   - **Coverage gap:** a behavior has no test. Make sure its bullet says `no test`. That's map content, not a product bug.
   - **Product bug:** the component is broken. Record it for the user with the commands that reproduce it, and keep it out of your changes.

6. **Ship or stop.**
   - **changed:** re-read every changed file, then put the corrections on one branch. Open a pull request only if the run was started with permission to do so, either as a scheduled job or because the user asked. Otherwise leave the branch and report.
   - **clean or blocked:** no branch.

   In every case, report:
   - the outcome;
   - which components and feature files got source and live coverage;
   - the drift fixed;
   - harness changes;
   - coverage gaps found;
   - suspected product bugs, with their repro commands;
   - unreachable behaviors and their prerequisites.

Keep short run notes in a scratch location outside the repo. Don't commit them.
