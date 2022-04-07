import { useState } from "react"

function App() {

 const [inputState, setInputState] = useState({
   titulo: "", 
   fecha: "", 
   nota: "",
 });


  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickLimpiar = ()=> {
setInputState({titulo:"",fecha: "",nota:""});
};
  return (
    <div className="App container">
    <div className="row">
    <div classMane="col">
      <h3>lista</h3>
    </div>
    <div className="col">
      <h3>Notas</h3>
      <label className ="mb-2">
        Titulo
      <input 
        id = "titulo" 
        name = "titulo" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.titulo}
      />
      </label>
      <br/>

      <label className = "mb-2">
        Fecha
      <input 
        id = "fecha"
        name = "fecha" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.fecha}
      />
      </label>
      <br/>

      <label className = "mb-2">
        Nota
      <input 
        id = "nota" 
        name = "nota" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.nota}
      />
      </label>
      </div>
      </div>
      <hr />
      <div className= "ms-2 mt-2">
    <button
          type="button" 
          className="btn btn-primary" 
          onClick={handleClickLimpiar}
          >
        Limpiar
    </button>

    </div>
</div>
  );
  }
  
export default App;
