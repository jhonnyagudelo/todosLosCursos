function App() {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.entries(data));
  };
  return (
    <form onSubmit={submit}>
      <div>
        <span>lalal</span>
        <input name="campo" />
        <input name="campo2" />
        <input type="file" name="archivo" />
        <input type="submit" value="enviar" />
      </div>
    </form>
  );
}

export default App;
