# Pre-Release Backwards Compatibility Check

Reference documentation for the `/pre-release-check` command.

## Purpose

This skill runs before each release to verify that user-facing exports and paths haven't been broken. It catches regressions that could break existing users.

## What Gets Checked

### 1. Automated Validation Scripts
- `pnpm test:output-validation` - Validates eik/index.js includes all manifest components and styles.css has correct :not(:defined) rules
- `pnpm test:eik-backwards-compat` - Validates legacy component paths and toast API exports

### 2. Package.json Export Count
- Compares current export count with the latest stable release
- Warns if export count decreased (possible breaking change)

### 3. Component Registration Comparison
- Extracts component tagNames from the custom-elements.json manifest
- Compares against previous release to detect removed components
- Any removed component is a BLOCKING issue

### 4. CDN Bundle Integrity
- Verifies bundle size is reasonable
- Counts customElements.define calls
- Checks toast API exports (toast, removeToast, updateToast)

### 5. Component Registration Verification
- Lists all components registered via customElements.define in the bundle

## Files Involved

- `eik/index.js` - Main CDN bundle
- `eik/api.js` - Toast API standalone bundle
- `eik/packages/*/index.js` - Legacy component paths (14 components)
- `eik/styles.css` - Cloak styles
- `dist/custom-elements.json` - Component manifest
- `package.json` - NPM package exports

## Legacy Components (Do Not Remove)

These 14 components must always have backwards-compatible CDN paths at `eik/packages/{name}/index.js`:

1. affix
2. alert
3. attention
4. badge
5. box
6. breadcrumbs
7. button
8. card
9. expandable
10. modal
11. pill
12. select
13. textfield
14. toast

## Required Exports

### From eik/index.js
- All component classes (WarpButton, WarpAlert, etc.)
- Toast API: `toast`, `removeToast`, `updateToast`

### From eik/api.js
- `toast`, `removeToast`, `updateToast`

### From package.json
- `./toast` must have both `types` and `import` fields:
  ```json
  "./toast": {
    "types": "./dist/packages/toast/api.d.ts",
    "import": "./dist/api.js"
  }
  ```

## Common Issues and Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Missing legacy paths | build:eik-components-backwards-compat not run | `pnpm build:eik-components-backwards-compat` |
| Missing toast exports | toast.ts missing re-exports | Add `export { toast, removeToast, updateToast } from './api.js'` to toast.ts |
| Component not in manifest | Not in CEM config | Add to `.cem/custom-element-manifest.config.js` globs |
| TypeScript errors on import | Missing types field | Update package.json export to include types |

## Related Scripts

- `tests/output-validation/validate-eik-output.js` - Validates manifest/bundle/styles alignment
- `tests/output-validation/validate-eik-backwards-compat.js` - Validates legacy paths and toast exports
- `build/components-eik.js` - Builds legacy component paths
- `build/entrypoint.js` - Generates main bundle entrypoint
