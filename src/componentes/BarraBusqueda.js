import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/BarraBusqueda.css"
function BarraBusqueda() {
  
  return (
 
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link class="navbar-brand" to="/">Inicio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/quienes-somos">Quienes Somos</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link" to="/productos">Productos</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link" to="/login">Inicio de Sesión</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link" to="/carrito">Carrito</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link" to="/contacto">Contacto</Link>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
          
            
           
            
          

  );
}

export default BarraBusqueda;