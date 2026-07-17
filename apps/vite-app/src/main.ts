export interface ButtonExample {
  label: string;
  icon: string;
  action: string;
  disabled: boolean;
}

export function getButtonExamples(): ButtonExample[] {
  return [
    { label: 'Save changes', icon: '✓', action: 'save', disabled: false },
    { label: 'Open settings', icon: '⚙', action: 'settings', disabled: false },
    { label: 'Delete item', icon: '🗑', action: 'delete', disabled: true },
  ];
}

export function createAppMarkup(): string {
  const buttons = getButtonExamples();
  const buttonMarkup = buttons
    .map(
      (button) => `
        <button
          type="button"
          data-action="${button.action}"
          aria-label="${button.label}"
          ${button.disabled ? 'aria-disabled="true" disabled' : ''}
        >
          <span aria-hidden="true">${button.icon}</span>
          <span>${button.label}</span>
        </button>`
    )
    .join('');

  return `
    <main>
      <h1>Vite accessibility demo</h1>
      <section>
        <h2>Button examples</h2>
        <div>${buttonMarkup}</div>
      </section>
    </main>
  `;
}
