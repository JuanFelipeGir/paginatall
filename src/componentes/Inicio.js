import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/inicio.css";
import BarraBusqueda from './BarraBusqueda';
import Carrouseluno from '../icons/carrouseluno.jpg';
import Carrouseldos from '../icons/carrouseldos.jpg';
import Carrouseltres from '../icons/carrouseltres.jpg';


function Inicio() {
  return (
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Carrouseluno} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={Carrouseldos} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={Carrouseltres} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Inicio;