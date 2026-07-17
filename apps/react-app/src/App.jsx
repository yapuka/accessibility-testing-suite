export default function App() {
  return (
    <main>
      <h1>React accessibility demo</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
