#!/usr/bin/env bash

# Test script for validating eik build output
# Ensures customElements.define calls match :not(:defined) styles

set -e

cd "$(dirname "$0")"

echo "Running eik output validation..."
echo ""

node validate-eik-output.js
