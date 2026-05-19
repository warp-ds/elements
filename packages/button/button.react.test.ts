import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, test } from 'vitest';

import { Button } from './react.js';

describe('Button React SSR', () => {
  test('renders fullWidth as the full-width attribute', () => {
    const html = renderToString(React.createElement(Button, { fullWidth: true }, 'Full width'));

    expect(html).toContain('full-width');
    expect(html).not.toContain('fullWidth');
  });

  test('renders iconOnly as the icon-only attribute', () => {
    const html = renderToString(React.createElement(Button, { iconOnly: true }, 'Icon only'));

    expect(html).toContain('icon-only');
    expect(html).not.toContain('iconOnly');
  });
});
