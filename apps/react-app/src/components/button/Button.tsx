export interface ButtonExampleProps {
  label: string;
  icon: string;
  action: string;
  disabled?: boolean;
}

export function ButtonExample({ label, icon, action, disabled = false }: ButtonExampleProps) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof globalThis !== 'undefined' && typeof globalThis.console !== 'undefined') {
          globalThis.console.log(`Action: ${action}`);
        }
      }}
      aria-label={label}
      disabled={disabled}
    >
      <span aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
