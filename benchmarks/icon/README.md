# `w-icon` benchmark

This benchmark compares the runtime loading behavior of `w-icon` using a deterministic local response instead of the real CDN. It measures cold-page loading for repeated and unique icons, request count, response bytes, readiness time, and layout shift.

## Run

Install Playwright's Chromium browser if needed:

```sh
pnpm exec playwright install chromium
```

Run from the repository root:

```sh
pnpm benchmark:icon
```

Optional environment variables:

```sh
ICON_BENCHMARK_RUNS=20 ICON_BENCHMARK_DELAY=500 \
ICON_BENCHMARK_OUTPUT=benchmarks/icon/results-branch.json \
pnpm benchmark:icon
```

Run the same command at the parent commit and at the branch under test, using different output files. Compare the medians and distributions in the generated JSON. The repeated-icon scenarios should issue one request per page; unique icons should issue one request per icon.

For CPU/network throttling, use Playwright tracing or temporarily add `context.newPage()` emulation in `run.mjs`. Keep browser version, run count, delay, and machine consistent between before and after runs.
