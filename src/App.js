import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import QuienesSomos from './componentes/QuienesSomos';
import Productos from './componentes/Productos';
import Login from './componentes/Login';
import Carrito from './componentes/Carrito';
import Contacto from './componentes/Contacto';
import BarraBusqueda from './componentes/BarraBusqueda';

const App = () => {
  return (
    <Router>

       <BarraBusqueda/>
       <Routes>
       <Route exact path="/"  element={<Inicio/>} />
        <Route path="/quienes-somos" element={QuienesSomos} />
        <Route path="/productos" component={Productos} />
        <Route path="/login" element={<Login/>} /> {/* Corregir el nombre del componente */}
        <Route path="/carrito" component={Carrito} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/busqueda" component={BarraBusqueda} />
      
       </Routes>
    </Router>
  );
}

export default App;

