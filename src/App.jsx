function App() {
  //TODO: Pesentar el concepto de "state"
  let varprueba = "Titulo";

  const handleChangePrueba = (event) => {
    varprueba = event.target.value;
  };

  return (
    <div className="App">
      <h3>Notas</h3>
      <label htmlFor="pruebaID">Input de prueba</label>
      <input
        id="pruebaID"
        name="prueba"
        type="text"
        onChance={handleChangePrueba}
        value={varprueba}
      />
      </div>
  );
}

export default App;
