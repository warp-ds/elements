# verify-elements internals

Read this before you change or extend the CLI. How to use it is in [SKILL.md](SKILL.md). The page it drives is described in [playground/README.md](../../../playground/README.md).

The code has no comments by design, except one-line notes on behavior forced by something we can't change, such as a browser, Vite or Playwright quirk. Everything else is explained here.

## Layout

| File | Role |
|---|---|
| `ctl.mjs` | Entry point. Parses arguments, loads `commands/<name>.mjs`, prints one JSON object. Builds `--help` from the command files. |
| `commands/<name>.mjs` | One command per file. |
| `lib/session.mjs` | Paths under `.verify-elements/`, the session file, JSON output, and `post`/`request` for talking to the daemon. |
| `lib/processes.mjs` | Process trees from `ps`, and `kill` by PID. |
| `lib/pointer.mjs` | `click` and `hover` with a fallback for Playwright's WebKit hit test. |
| `lib/chromium.mjs` | `requireChromium` and a shared DevTools Protocol session for the Chromium-only commands. |
| `lib/daemon.mjs` | The background process that owns Vite, the browser and the page. |

## Command contract

A command file exports:

- `help`: `{ usage, about, examples }`. Examples omit the `node .../ctl.mjs` prefix. The first sentence of `about` is the summary in `ctl --help`.
- `booleanFlags`, optional: names of flags that take no value, such as `["headed"]`. Without it, `--name` followed by a word takes that word as its value.
- `args(input)`, optional: turns `{ positional, flags, paths }` into the request sent to the daemon. Call `fail()` or `needArgs()` for usage errors.
- One of:
  - `run(ctx, args)`: runs in the daemon, next to the page. Returns an object that is merged into `{ ok: true, command }`. Return `ok: false` with `error` and `hint` for a failure that isn't an exception.
  - `main(input)`: runs in the client and returns the object to print. Only `up`, `down`, `doctor` and `check` do this.
- `hint(message, args)`, optional: a hint for errors specific to this command. The daemon falls back to its generic hints.

`ctx` holds `page`, `browser`, `config`, `viteUrl`, `playgroundUrl`, `actionTimeout`, `state` and `act`:

- `state`: `consoleLog`, `mountedAt`, `lastMount`, `lastMountResult` and `reloads`.
- `act(action)`: runs the action, waits for Lit updates and two animation frames, and returns `focused` plus `eventsDuringAction`. Wrap every user action in it.

## Why it works this way

- **A daemon.** Each `ctl` call is its own process. The page, the event log and the mouse state must outlive one call, so they live in a long-running process that each call talks to over local HTTP.
- **One command at a time.** The daemon queues commands. That way the remount after a reload never runs in the middle of a user action.
- **Remount after reload.** Lit components have no hot-reload boundary, so Vite reloads the page when component source changes. The daemon then runs the last mount again.
- **`vitest.config.ts` as the Vite config.** The playground compiles components exactly the way the tests do, and the viewport comes from the same file.
- **Vite cache per session.** Two sessions never rewrite each other's pre-bundled dependencies.
- **`optimizeDeps.entries` scans `packages/*/*.ts`.** Components are imported at runtime, which Vite's scanner can't see. Scanning their sources up front means a newly found dependency never triggers a reload in the middle of a mount.
- **Shutdown order.** Playwright's own signal handling is off, so the daemon's `shutdown` closes the browser before Vite.
- **Brand check at startup.** If the brand's fonts or tokens fail to load, the daemon logs the URLs and exits, so `up` fails instead of serving unstyled components.
- **Stop only what we started.** `up` records the daemon's process tree. `down` asks the daemon to shut down, then stops anything left by PID. It only kills a process whose command line still matches the recorded one, so a reused PID is never killed. Never by name. This uses `ps`, so it works on macOS and Linux.
- **`check` never uses a shell.** Map files come from the repo, so `check` splits each line into arguments itself and starts `ctl` directly. A line with shell syntax (`; | & < > $` or backticks), or one that isn't a `ctl` or `sleep` command, is reported, never run.
- **Pointer fallback.** In WebKit, Playwright's pre-click check can report a shadow host as covering its own shadow content, so every click into `w-combobox` would time out. `pointerAction` runs Playwright's check first; when it reports interception, it asks the browser what is really at the element's centre, walking down through the shadow roots. If that is the target, it sends a forced, real mouse event there and adds a `note` to the output. A real interception still fails.
- **Leaving the playground.** The daemon watches main-frame navigations. If the page leaves `/playground/`, for example after Backspace outside an input in WebKit, every command except `mount`, `doctor` and `console` reports it, and `mount` navigates back first.
- **Call log reasons.** Failed actions return the Playwright call log lines that explain why, such as "intercepts pointer events" or "not enabled", not just the first lines.
- **Stale sessions.** `up` on a session whose daemon is gone runs `down` first, to clean up what it left behind.
