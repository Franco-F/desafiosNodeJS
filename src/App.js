import { Nav, Placeholder } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (
    <div>
      <h1 className="titulo">Mantelería online</h1>
      <p className="textoPrueba">Menú e-commerce</p>
      <Navbar />
      <ItemListContainer placeholderN={1} />
      <ItemListContainer placeholderN={2} />
      <ItemListContainer placeholderN={3} />
    </div> 
  );
}

export default App;
