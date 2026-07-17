export interface FormField {
  id: string;
  name: string;
  label: string;
}

export default function App() {
  const field: FormField = {
    id: 'name',
    name: 'name',
    label: 'Name',
  };

  return (
    <main>
      <h1>React accessibility demo</h1>
      <form>
        <label htmlFor={field.id}>{field.label}</label>
        <input id={field.id} name={field.name} />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
