---
name: Accessibility Audit and Testing
description: Strict guidelines for ensuring WCAG 2.1 AA compliance in generated frontend code.
---

# Accessibility (a11y) Audit Constraints

All UI components generated must adhere to the following:
1. **Semantic HTML**: Use proper tags (`<button>`, `<nav>`, `<main>`, `<article>`) instead of `<div>` soup.
2. **ARIA Attributes**: When custom UI elements are built (like custom selects or modals), appropriate `aria-*` tags and `role` attributes must be applied.
3. **Color Contrast**: Ensure text has a contrast ratio of at least 4.5:1 against its background.
4. **Keyboard Navigation**: All interactive elements must be focusable and triggerable via keyboard. Use `outline` on focus states.
5. **Screen Reader Text**: Provide `.sr-only` text for icon-only buttons.
