export interface ButtonExampleProps {
  label: string;
  icon: string;
  action: string;
  disabled?: boolean;
}

export function createButtonMarkup({
  label,
  icon,
  action,
  disabled = false,
}: ButtonExampleProps): string {
  return `
    <button
      type="button"
      data-action="${action}"
      aria-label="${label}"
      ${disabled ? 'aria-disabled="true" disabled' : ''}
    >
      <span aria-hidden="true">${icon}</span>
      <span>${label}</span>
    </button>
  `;
}
