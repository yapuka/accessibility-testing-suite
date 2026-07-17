export interface InputExampleProps {
  id: string;
  label: string;
  name: string;
}

export function InputExample({ id, label, name }: InputExampleProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="text" />
    </div>
  );
}
