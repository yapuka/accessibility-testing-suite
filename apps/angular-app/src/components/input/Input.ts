export interface InputExampleProps {
  id: string;
  label: string;
  name: string;
}

export function createInputComponent({ id, label, name }: InputExampleProps): string {
  return `
<section>
  <label for="${id}">${label}</label>
  <input id="${id}" name="${name}" type="text" />
</section>
`;
}
