export interface DemoFormConfig {
  id: string;
  name: string;
  label: string;
}

export function createAppMarkup(): string {
  const config: DemoFormConfig = {
    id: 'name',
    name: 'name',
    label: 'Name',
  };

  return `
    <main>
      <h1>Vite accessibility demo</h1>
      <form>
        <label for="${config.id}">${config.label}</label>
        <input id="${config.id}" name="${config.name}" />
        <button type="submit">Submit</button>
      </form>
    </main>
  `;
}
