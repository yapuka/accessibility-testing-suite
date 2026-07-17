import { ButtonExample } from './components/button/Button';
import { InputExample } from './components/input/Input';

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

export default function App() {
  const buttons = getButtonExamples();

  return (
    <main>
      <h1>React accessibility demo</h1>
      <section aria-labelledby="input-example-title">
        <h2 id="input-example-title">Input example</h2>
        <InputExample id="email" label="Email" name="email" />
      </section>
      <section aria-labelledby="button-examples-title">
        <h2 id="button-examples-title">Button examples</h2>
        <ul>
          {buttons.map((button) => (
            <li key={button.label}>
              <ButtonExample
                label={button.label}
                icon={button.icon}
                action={button.action}
                disabled={button.disabled}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
