import { createButtonMarkup } from './components/button/Button';
import { createInputMarkup } from './components/input/Input';

export interface ButtonExampleItem {
  label: string;
  icon: string;
  action: string;
  disabled: boolean;
}

export function getButtonExamples(): ButtonExampleItem[] {
  return [
    { label: 'Save changes', icon: '✓', action: 'save', disabled: false },
    { label: 'Open settings', icon: '⚙', action: 'settings', disabled: false },
    { label: 'Delete item', icon: '🗑', action: 'delete', disabled: true },
  ];
}

export function createAppMarkup(): string {
  const buttons = getButtonExamples();
  const buttonMarkup = buttons.map((button) => createButtonMarkup(button)).join('');

  return `
    <main>
      <h1>Vite accessibility demo</h1>
      <section>
        <h2>Input example</h2>
        ${createInputMarkup({ id: 'email', label: 'Email', name: 'email' })}
      </section>
      <section>
        <h2>Button examples</h2>
        <div>${buttonMarkup}</div>
      </section>
    </main>
  `;
}
