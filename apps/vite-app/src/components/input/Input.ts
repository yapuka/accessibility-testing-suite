export interface InputExampleProps {
  id: string;
  label: string;
  name: string;
}

export function createInputMarkup({ id, label, name }: InputExampleProps): string {
  return `
    <div>
      <label for="${id}">${label}</label>
      <input id="${id}" name="${name}" type="text" />
    </div>
  `;
}
