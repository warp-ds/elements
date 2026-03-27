import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration, testHydrationWithChildren } from '../../tests/react-hydration';

import './breadcrumbs.js';

describe('w-breadcrumbs React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-breadcrumbs', {});
    expect(warnings).toEqual([]);
  });

  test('with aria-label hydrates without warnings', async () => {
    const warnings = await testHydration('w-breadcrumbs', { 'aria-label': 'Navigation breadcrumbs' });
    expect(warnings).toEqual([]);
  });

  // Tests for child elements - breadcrumbs interleaves children with "/" separators
  // and adds CSS classes to children, which can cause hydration mismatches

  test('with single link child hydrates without warnings', async () => {
    const childrenHtml = '<a href="#/home">Home</a>';
    const warnings = await testHydrationWithChildren('w-breadcrumbs', {}, childrenHtml);
    expect(warnings).toEqual([]);
  });

  test('with multiple link children hydrates without warnings', async () => {
    // This tests the interleaving behavior - "/" separators are added between children
    const childrenHtml = '<a href="#/home">Home</a><a href="#/category">Category</a>';
    const warnings = await testHydrationWithChildren('w-breadcrumbs', {}, childrenHtml);
    expect(warnings).toEqual([]);
  });

  test('with three link children hydrates without warnings', async () => {
    // More children = more separators interleaved
    const childrenHtml = '<a href="#/home">Home</a><a href="#/category">Category</a><a href="#/page">Page</a>';
    const warnings = await testHydrationWithChildren('w-breadcrumbs', {}, childrenHtml);
    expect(warnings).toEqual([]);
  });

  test('with links and span (current page) hydrates without warnings', async () => {
    // Common pattern: links for navigation, span for current page
    const childrenHtml = '<a href="#/home">Home</a><a href="#/category">Category</a><span aria-current="page">Current page</span>';
    const warnings = await testHydrationWithChildren('w-breadcrumbs', {}, childrenHtml);
    expect(warnings).toEqual([]);
  });

  test('with span children hydrates without warnings', async () => {
    // Non-link children get different CSS class (s-text vs s-text-link)
    const childrenHtml = '<span>First</span><span>Second</span><span aria-current="page">Current</span>';
    const warnings = await testHydrationWithChildren('w-breadcrumbs', {}, childrenHtml);
    expect(warnings).toEqual([]);
  });

  test('with mixed element types hydrates without warnings', async () => {
    // Mix of different element types to ensure class assignment works correctly
    const childrenHtml = '<a href="#/home">Home</a><span>Category</span><a href="#/page">Page</a>';
    const warnings = await testHydrationWithChildren('w-breadcrumbs', {}, childrenHtml);
    expect(warnings).toEqual([]);
  });

  test('with aria-label and children hydrates without warnings', async () => {
    const childrenHtml = '<a href="#/home">Home</a><a href="#/category">Category</a>';
    const warnings = await testHydrationWithChildren('w-breadcrumbs', { 'aria-label': 'Breadcrumb navigation' }, childrenHtml);
    expect(warnings).toEqual([]);
  });
});

// These tests verify the component's DOM manipulation behavior that can cause
// hydration mismatches. The breadcrumbs component currently:
// 1. Moves children from light DOM to shadow DOM
// 2. Adds CSS classes to child elements
// 3. Interleaves separator elements between children
//
// In SSR scenarios, children are rendered in light DOM. When the component
// hydrates client-side and moves/modifies them, React detects a mismatch.
//
// These tests use test.fails to document the known issues until they are fixed.
describe('w-breadcrumbs child element DOM stability', () => {
  test.fails('should preserve children in light DOM (not move to shadow DOM)', async () => {
    const container = document.createElement('div');
    container.innerHTML = '<w-breadcrumbs><a href="#/home">Home</a><a href="#/category">Category</a></w-breadcrumbs>';
    document.body.appendChild(container);

    // Wait for custom element upgrade
    await new Promise((resolve) => setTimeout(resolve, 100));

    const breadcrumbs = container.querySelector('w-breadcrumbs');
    // Children should remain in light DOM, not be moved to shadow DOM
    // Current behavior: children.length is 0 because they're moved to shadow DOM
    expect(breadcrumbs?.children.length).toBe(2);

    document.body.removeChild(container);
  });

  test.fails('should not add classes to light DOM link children', async () => {
    const container = document.createElement('div');
    container.innerHTML = '<w-breadcrumbs><a href="#/home">Home</a><a href="#/category">Category</a></w-breadcrumbs>';
    document.body.appendChild(container);

    // Wait for custom element upgrade
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check light DOM children exist and don't have modified classes
    const links = container.querySelectorAll('w-breadcrumbs > a');
    expect(links.length).toBe(2);
    for (const link of links) {
      // Links should NOT have classes added by the component
      expect(link.classList.contains('s-text-link')).toBe(false);
    }

    document.body.removeChild(container);
  });

  test.fails('should not add classes to light DOM span children', async () => {
    const container = document.createElement('div');
    container.innerHTML = '<w-breadcrumbs><span>First</span><span>Current</span></w-breadcrumbs>';
    document.body.appendChild(container);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const spans = container.querySelectorAll('w-breadcrumbs > span');
    expect(spans.length).toBe(2);
    for (const span of spans) {
      // Spans should NOT have classes added by the component
      expect(span.classList.contains('s-text')).toBe(false);
    }

    document.body.removeChild(container);
  });

  test.fails('should not insert separator elements into light DOM', async () => {
    const container = document.createElement('div');
    container.innerHTML = '<w-breadcrumbs><a href="#/home">Home</a><a href="#/category">Category</a></w-breadcrumbs>';
    document.body.appendChild(container);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const breadcrumbs = container.querySelector('w-breadcrumbs');
    // Should only have the original 2 children, no separators added to light DOM
    expect(breadcrumbs?.children.length).toBe(2);
    // No separator spans should be in light DOM
    const separators = container.querySelectorAll('w-breadcrumbs > span.select-none');
    expect(separators.length).toBe(0);

    document.body.removeChild(container);
  });

  test.fails('should preserve original child element attributes in light DOM', async () => {
    const container = document.createElement('div');
    container.innerHTML = '<w-breadcrumbs><a href="#/home" data-test="home">Home</a><span aria-current="page">Current</span></w-breadcrumbs>';
    document.body.appendChild(container);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const link = container.querySelector('w-breadcrumbs > a');
    const span = container.querySelector('w-breadcrumbs > span');

    // Children should exist in light DOM
    expect(link).not.toBeNull();
    expect(span).not.toBeNull();

    // Original attributes should be preserved
    expect(link?.getAttribute('href')).toBe('#/home');
    expect(link?.getAttribute('data-test')).toBe('home');
    expect(span?.getAttribute('aria-current')).toBe('page');

    document.body.removeChild(container);
  });
});
