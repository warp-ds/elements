#!/usr/bin/env bash

# Test script for module resolution
# Runs TypeScript type checking against all different moduleResolution configs

set -e

cd "$(dirname "$0")"

echo "Running module resolution tests..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Track if any tests failed
FAILED=0

# Test with each tsconfig
for config in tsconfig.*.json; do
  strategy=$(basename "$config" .json | sed 's/tsconfig\.//')

  echo "Testing moduleResolution: $strategy"

  if npx tsc -p "$config" --noEmit; then
    echo -e "${GREEN}✓${NC} $strategy: PASSED"
  else
    echo -e "${RED}✗${NC} $strategy: FAILED"
    FAILED=1
  fi

  echo ""
done

# Test runtime Node ESM imports for all package exports.
# Reads exports from package.json and verifies each one resolves
# correctly under Node's strict ESM module resolution.
echo "Testing runtime Node ESM imports"

# Extract importable export keys from package.json (skip JSON/wildcard exports)
IMPORTS=$(node -e "
  const pkg = require('../../package.json');
  for (const key of Object.keys(pkg.exports)) {
    if (key === '.' || key.includes('*') || key.endsWith('.json')) continue;
    const spec = '@warp-ds/elements' + key.replace(/^\./, '');
    console.log(spec);
  }
")

while IFS= read -r imp; do
  RUNTIME_OUTPUT=$(node --input-type=module -e "
    import '$imp';
    process.exit(0);
  " 2>&1) && RUNTIME_EXIT=0 || RUNTIME_EXIT=$?

  if [ $RUNTIME_EXIT -eq 0 ]; then
    echo -e "${GREEN}✓${NC} import $imp: PASSED"
  else
    echo -e "${RED}✗${NC} import $imp: FAILED"
    echo "$RUNTIME_OUTPUT"
    FAILED=1
  fi
done <<< "$IMPORTS"

echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}All module resolution tests passed!${NC}"
  exit 0
else
  echo -e "${RED}Some module resolution tests failed.${NC}"
  exit 1
fi
