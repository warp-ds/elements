# Pre-Release Backwards Compatibility Check

Run this command before each release to verify that user-facing exports and paths haven't been broken.

## Instructions

Execute the following validation steps:

### 1. Run all automated validation scripts

First, ensure the build is up to date, then run both validation scripts:

```bash
pnpm build
```

```bash
pnpm test:output-validation
```

```bash
pnpm test:eik-backwards-compat
```

Report the results of each. If any validation fails, stop and explain what failed.

### 2. Compare with latest stable release

```bash
LATEST_TAG=$(git tag --list 'v*' --sort=-v:refname | grep -v next | head -1)
echo "Comparing against: $LATEST_TAG"

# Compare package.json exports
echo ""
echo "=== Package.json exports comparison ==="
PREV_EXPORTS=$(git show $LATEST_TAG:package.json 2>/dev/null | grep -E '"\./' | grep -v '//' | wc -l | tr -d ' ')
CURR_EXPORTS=$(grep -E '"\.\/' package.json | grep -v '//' | wc -l | tr -d ' ')
echo "Previous ($LATEST_TAG): $PREV_EXPORTS exports"
echo "Current: $CURR_EXPORTS exports"

if [ "$CURR_EXPORTS" -lt "$PREV_EXPORTS" ]; then
  echo "WARNING: Export count DECREASED - possible breaking change!"
else
  echo "OK: Export count maintained or increased"
fi
```

### 3. Check for dropped components in CEM config

This is critical - if a component is removed from the CEM config, it won't be in the bundle.

```bash
LATEST_TAG=$(git tag --list 'v*' --sort=-v:refname | grep -v next | head -1)
echo "=== CEM Config Component Comparison ==="

# Get previous components from CEM config (released components only)
echo ""
echo "Previous release ($LATEST_TAG) components in CEM config:"
git show $LATEST_TAG:.cem/custom-element-manifest.config.js 2>/dev/null | grep "packages/.*\.ts" | grep -v "//" | sed "s/.*packages\///" | sed "s/\/.*\.ts.*//" | sort -u > /tmp/prev_components.txt
cat /tmp/prev_components.txt | wc -l | xargs -I{} echo "  {} components"

echo ""
echo "Current components in CEM config:"
grep "packages/.*\.ts" .cem/custom-element-manifest.config.js | grep -v "//" | sed "s/.*packages\///" | sed "s/\/.*\.ts.*//" | sort -u > /tmp/curr_components.txt
cat /tmp/curr_components.txt | wc -l | xargs -I{} echo "  {} components"

echo ""
echo "Components REMOVED from CEM (BREAKING CHANGE if any):"
REMOVED=$(comm -23 /tmp/prev_components.txt /tmp/curr_components.txt)
if [ -z "$REMOVED" ]; then
  echo "  (none - OK)"
else
  echo "$REMOVED" | while read comp; do echo "  ✗ REMOVED: $comp"; done
  echo ""
  echo "  !!! THIS IS A BREAKING CHANGE - Components removed from bundle !!!"
fi

echo ""
echo "Components ADDED to CEM (OK):"
ADDED=$(comm -13 /tmp/prev_components.txt /tmp/curr_components.txt)
if [ -z "$ADDED" ]; then
  echo "  (none)"
else
  echo "$ADDED" | while read comp; do echo "  + ADDED: $comp"; done
fi

# Clean up
rm -f /tmp/prev_components.txt /tmp/curr_components.txt
```

### 4. Verify CDN bundle integrity

```bash
echo ""
echo "=== CDN Bundle Checks ==="

# Check bundle size is reasonable
BUNDLE_SIZE=$(wc -c < eik/index.js | tr -d ' ')
echo "eik/index.js size: $BUNDLE_SIZE bytes"

# Count customElements.define calls in the bundle
DEFINE_COUNT=$(grep -o "customElements.define" eik/index.js | wc -l | tr -d ' ')
echo "customElements.define calls in bundle: $DEFINE_COUNT"

# Check toast exports
echo ""
echo "Toast API exports in eik/index.js:"
grep -q "as toast[,}]" eik/index.js && echo "  ✓ toast" || echo "  ✗ toast MISSING"
grep -q "as removeToast[,}]" eik/index.js && echo "  ✓ removeToast" || echo "  ✗ removeToast MISSING"
grep -q "as updateToast[,}]" eik/index.js && echo "  ✓ updateToast" || echo "  ✗ updateToast MISSING"
```

### 5. Verify all expected components are registered in bundle

```bash
echo ""
echo "=== Component Registration Check ==="

# Extract all w-* component names from customElements.define calls in the bundle
echo "Components registered in eik/index.js:"
grep -o 'customElements.define("[^"]*"' eik/index.js | cut -d'"' -f2 | sort | while read comp; do
  echo "  ✓ $comp"
done

echo ""
TOTAL=$(grep -o 'customElements.define("[^"]*"' eik/index.js | wc -l | tr -d ' ')
echo "Total: $TOTAL components registered"
```

### 6. Compare customElements.define count with previous release

```bash
LATEST_TAG=$(git tag --list 'v*' --sort=-v:refname | grep -v next | head -1)
echo ""
echo "=== customElements.define Count Comparison ==="

# Count components in previous CEM config
PREV_COUNT=$(git show $LATEST_TAG:.cem/custom-element-manifest.config.js 2>/dev/null | grep "packages/.*\.ts" | grep -v "//" | wc -l | tr -d ' ')
CURR_COUNT=$(grep "packages/.*\.ts" .cem/custom-element-manifest.config.js | grep -v "//" | wc -l | tr -d ' ')

echo "Previous ($LATEST_TAG): $PREV_COUNT component files in CEM"
echo "Current: $CURR_COUNT component files in CEM"

if [ "$CURR_COUNT" -lt "$PREV_COUNT" ]; then
  echo ""
  echo "WARNING: Component count DECREASED by $((PREV_COUNT - CURR_COUNT))"
  echo "This may indicate components were accidentally removed!"
else
  DIFF=$((CURR_COUNT - PREV_COUNT))
  echo "OK: Component count increased by $DIFF (or unchanged)"
fi
```

### 7. Final summary

Provide a summary table with:
- ✓ or ✗ for each check
- Any warnings about potential breaking changes
- List of any removed components (this is a BLOCKER)
- Recommendation on whether it's safe to release

## Checklist for a Safe Release

- [ ] `pnpm test:output-validation` passes
- [ ] `pnpm test:eik-backwards-compat` passes
- [ ] Package.json export count has not decreased
- [ ] NO components have been removed from CEM config
- [ ] Toast API (toast, removeToast, updateToast) exported from main bundle
- [ ] All 14 legacy component paths exist in eik/packages/
- [ ] customElements.define count has not decreased

## Blocking Issues (Must Fix Before Release)

- Any component removed from CEM config
- Any customElements.define call dropped from bundle
- Missing toast API exports
- Failed validation scripts

## If Issues Are Found

1. **Missing legacy paths**: Run `pnpm build:eik-components-backwards-compat`
2. **Missing toast exports**: Check `packages/toast/toast.ts` has re-exports from `./api.js`
3. **Missing component registrations**: Check CEM config and ensure component is included
4. **Package.json issues**: Ensure exports haven't been accidentally removed
5. **Build issues**: Run full `pnpm build` and retry
