import './App.css';
import { NavBar } from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from './componentes/Footer/Footer';
import ItemDetailsContainer from './componentes/itemDetailsContainer/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Carrito from './componentes/carrito/Carrito';
import { CarritoProvider } from './context/CarritoContext';
import Checkout from './componentes/checkout/Checkout';

function App() {

  return (
    <div className="App">
      <CarritoProvider>
        <BrowserRouter>

          <NavBar/>  

          <Routes>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route path="/productos/:categoria" element={ <ItemListContainer /> }/>
            <Route path="/productos/" element={ <ItemListContainer /> }/>
            <Route path="/item/:id" element={ <ItemDetailsContainer /> }/>
            <Route path="/carrito" element={ <Carrito/> }/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer />

        </BrowserRouter>
      </CarritoProvider>
    </div>
  );
}

export default App;
