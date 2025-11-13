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

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}All module resolution tests passed!${NC}"
  exit 0
else
  echo -e "${RED}Some module resolution tests failed.${NC}"
  exit 1
fi
