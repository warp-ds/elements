import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import { runAxe } from '../../tests/a11y/utils.js';
import './textarea.js';

describe('w-textarea accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    // go through setting the various attributes and running automated AXE tests on each
    test('default state has no violations', async () => {
      render(html`<w-textarea label="Message"></w-textarea>`);
      const results = await runAxe();
      expect(results).toHaveNoViolations();
    });

    test('with help text has no violations', async () => {
      render(html`<w-textarea label="Message" help-text="Enter your message"></w-textarea>`);
      const results = await runAxe();
      expect(results).toHaveNoViolations();
    });

    test('invalid state has no violations', async () => {
      render(html`<w-textarea label="Message" invalid help-text="This field is required"></w-textarea>`);
      const results = await runAxe();
      expect(results).toHaveNoViolations();
    });

    test('disabled state has no violations', async () => {
      render(html`<w-textarea label="Message" disabled></w-textarea>`);
      const results = await runAxe();
      expect(results).toHaveNoViolations();
    });

    test('readonly state has no violations', async () => {
      render(html`<w-textarea label="Message" readonly value="Read only text"></w-textarea>`);
      const results = await runAxe();
      expect(results).toHaveNoViolations();
    });

    test('required state has no violations', async () => {
      render(html`<w-textarea label="Message" required></w-textarea>`);
      const results = await runAxe();
      expect(results).toHaveNoViolations();
    });

    test('optional state has no violations', async () => {
      render(html`<w-textarea label="Message" optional></w-textarea>`);
      const results = await runAxe();
      expect(results).toHaveNoViolations();
    });
  });

  describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('textarea has accessible name from label', async () => {
      const page = render(html`<w-textarea label="Description"></w-textarea>`);
      // this checks that after we set the label to "Description", the textbox's accessible name is also "Description".
      // accessible name is derived from the label (or aria-label / aria-labelledby) if present (which they are not in this case)
      await expect.element(page.getByRole('textbox', { name: 'Description' })).toBeVisible();
    });
  });

  describe('WCAG 3.3.1 - Error Identification', () => {
    test('error state is indicated via aria-invalid', async () => {
      const page = render(html`<w-textarea label="Message" invalid></w-textarea>`);
      await expect.element(page.getByLabelText('Message')).toHaveAttribute('aria-invalid', 'true');
    });

    test('error message is associated via aria-errormessage', async () => {
      const page = render(html`<w-textarea label="Message" invalid help-text="Field is required"></w-textarea>`);
      await expect.element(page.getByLabelText('Message')).toHaveAccessibleErrorMessage('Field is required');
    });
  });

  describe('WCAG 3.3.2 - Labels or Instructions', () => {
    test('help text is programmatically associated', async () => {
      const page = render(html`<w-textarea label="Bio" help-text="Tell us about yourself"></w-textarea>`);
      await expect.element(page.getByLabelText('Bio')).toHaveAccessibleDescription('Tell us about yourself');
    });
  });

  // these tests essentially verify that the attributes we set on the host are mirrored to the internal textarea
  describe('WCAG 4.1.2 - Name, Role, Value', () => {
    test('required state is exposed', async () => {
      const page = render(html`<w-textarea label="Name" required></w-textarea>`);
      // getByLabelText resolves to the internal <textarea>, not the host element
      await expect.element(page.getByLabelText('Name')).toHaveAttribute('required');
    });

    test('disabled state is exposed', async () => {
      const page = render(html`<w-textarea label="Name" disabled></w-textarea>`);
      await expect.element(page.getByLabelText('Name')).toBeDisabled();
    });

    test('readonly state is exposed', async () => {
      const page = render(html`<w-textarea label="Name" readonly></w-textarea>`);
      await expect.element(page.getByLabelText('Name')).toHaveAttribute('readonly');
    });

    test('value is exposed', async () => {
      const page = render(html`<w-textarea label="Name" value="Hello"></w-textarea>`);
      await expect.element(page.getByLabelText('Name')).toHaveValue('Hello');
    });
  });

  describe('WCAG 2.1.1 - Keyboard', () => {
    test('textarea is focusable', async () => {
      const page = render(html`<w-textarea label="Message"></w-textarea>`);
      const textarea = page.getByLabelText('Message');
      await textarea.click();
      // Check focus via activeElement - delegatesFocus means the shadow root's textarea gets focus
      const wTextarea = document.querySelector('w-textarea');
      await expect.poll(() => wTextarea?.shadowRoot?.activeElement?.tagName).toBe('TEXTAREA');
    });

    test('disabled textarea is not focusable', async () => {
      const page = render(html`
        <button>Before</button>
        <w-textarea label="Message" disabled></w-textarea>
        <button>After</button>
      `);

      const buttons = Array.from(document.querySelectorAll('button'));
      const beforeBtn = buttons[0] as HTMLButtonElement | undefined;
      const afterBtn = buttons[1] as HTMLButtonElement | undefined;

      expect(beforeBtn).toBeDefined();
      expect(afterBtn).toBeDefined();

      beforeBtn?.focus();

      // Attempt to move focus to the disabled textarea; focus should remain on "Before".
      const wTextarea = document.querySelector('w-textarea') as HTMLElement | null;
      wTextarea?.click();
      await expect.element(beforeBtn).toHaveFocus();

      // Verify disabled textarea doesn't receive focus
      expect(wTextarea?.shadowRoot?.activeElement).toBeNull();
    });
  });
});
