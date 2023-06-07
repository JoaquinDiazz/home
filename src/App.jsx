import './App.css';
import { NavBar } from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <ItemListContainer greetings={"Proximamente todos los productos para amueblar tu hogar"}/>  
    </div>
  );
}

export default App;
