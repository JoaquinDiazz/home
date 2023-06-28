import './App.css';
import { NavBar } from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from './componentes/Footer/Footer';
import ItemDetailsContainer from './componentes/itemDetailsContainer/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>  

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoria" element={ <ItemListContainer /> }/>
          <Route path="/productos/" element={ <ItemListContainer /> }/>
          <Route path="/item/:id" element={ <ItemDetailsContainer /> }/>
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
