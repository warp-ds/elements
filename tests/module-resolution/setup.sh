#!/usr/bin/env bash

# Setup script for module resolution tests
# Creates a symlink to the workspace root so TypeScript can resolve
# @warp-ds/elements as if it were an installed package

set -e

cd "$(dirname "$0")"

echo "Setting up module resolution test environment..."

# Create node_modules directory structure
mkdir -p node_modules/@warp-ds

# Remove existing symlink if it exists
rm -f node_modules/@warp-ds/elements

ln -s ../../../.. node_modules/@warp-ds/elements

echo "✓ Setup complete"
