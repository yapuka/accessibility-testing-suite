export function createAppMarkup() {
  return `
    <main>
      <h1>Vite accessibility demo</h1>
      <form>
        <label for="name">Name</label>
        <input id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
    </main>
  `;
}
