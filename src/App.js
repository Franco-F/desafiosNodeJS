import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  const [text, setText] = React.useState("Valor inicial");
  return (
    <div>
      <h1 className="titulo">Mantelería online</h1>
      <p className="textoPrueba">Menú e-commerce</p>
      <Navbar />
      <ItemListContainer num = {"1"}/>

      {text}
      
    </div> 
  );
}

export default App;
