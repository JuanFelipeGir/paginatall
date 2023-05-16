import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/inicio.css";
import BarraBusqueda from './BarraBusqueda';
import Uno from '../icons/Uno.jpg'
import Facebook from '../icons/facebook.png'


function Inicio() {
  return (
    <div>
      <div>
         <div className="imagen_container">
          <img src={Uno} alt="Compras seguras" />
          <p className="imagen_texto" style={{ color: "white" }}>
            <strong>Compras seguras </strong>
          </p>
        </div>
        <div className="imagen_container">
          <img
            src="icons\7.png"
            alt="Pago contra entrega"
          />
          <p className="imagen_texto" style={{ color: "white" }}>
            <strong> Pago Contra entrega </strong>
          </p>
        </div>
        <div className="imagen_container">
          <img
            src="icons\6.png"
            alt="Entregas el mismo día"
          />
          <p className="imagen_texto" style={{ color: "white" }}>
            <strong> Entregas el mismo día</strong>
          </p>
        </div>
        <p style={{ color: "white" }} className="contac">
          <strong>Llámanos 1234567890</strong>
        </p>
        <div className="imagen_container2">
          <img src="icons\8.png" alt="Youtube" />
          <img src={Facebook} alt="Facebook" />
          <img src="icons\5.png" alt="Instagram" />
        </div>
        <div className="search">
          <form action="#">
            <input type="text" placeholder="Busca el producto" name="search" />
            <button>
              <i className="fa fa-search" style={{ fontSize: "18px" }} />
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Inicio;