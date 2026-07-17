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

export default function App() {
  const buttons = getButtonExamples();

  const handleClick = (action: string) => {
    if (typeof globalThis !== 'undefined') {
      const message = `Action: ${action}`;
      if (typeof globalThis.console !== 'undefined') {
        globalThis.console.log(message);
      }
    }
  };

  return (
    <main>
      <h1>React accessibility demo</h1>
      <section aria-labelledby="button-examples-title">
        <h2 id="button-examples-title">Button examples</h2>
        <ul>
          {buttons.map((button) => (
            <li key={button.label}>
              <button
                type="button"
                onClick={() => handleClick(button.action)}
                aria-label={button.label}
                disabled={button.disabled}
              >
                <span aria-hidden="true">{button.icon}</span>
                <span>{button.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
