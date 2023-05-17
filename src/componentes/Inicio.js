import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/inicio.css";
import BarraBusqueda from './BarraBusqueda';
import Carrouseluno from '../icons/carrouseluno.jpg';
import Carrouseldos from '../icons/carrouseldos.jpg';
import Carrouseltres from '../icons/carrouseltres.jpg';


function Inicio() {
  return (
   
  <div class="container text-center">
      <div class="col order-1">
    
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Carrouseluno}  class="rounded mx-auto d-block" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={Carrouseldos}  class="rounded mx-auto d-block" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={Carrouseltres}  class="rounded mx-auto d-block" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
</div>
<div class="row align-items-center" style={{ margin: '80px' }}>
    <div class="col">
      <h3>Entregas el mismo día</h3>
      <p>Entregamos todo lo que necesitas, cuando lo necesitas</p>
    </div>
    <div class="col">
    <h3>Pago online o contra entrega</h3>
    <p>Escoge tu método de pago. contamos con pagos certificadoss y seguross</p>
    </div>
    <div class="col">
    <h3>Todo lo que necesitas</h3>
      <p>Encuentra todo lo que necesitas para tu peludo</p>
    </div>
  </div>
</div>

  );
}

export default Inicio;