import React from 'react';
import "../styles/login.css";

const Login = () => {
  return (
    <main>
      <div className="contenedor">
        <div className="caja_trasera">
          <div className="caja_trasera_login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar a la página</p>
            <button id="btn_iniciar">Iniciar sesión</button>
          </div>
          <div className="caja_trasera_register">
            <h3>¿No tienes una cuenta?</h3>
            <p>Crea una para navegar en la página</p>
            <button id="btn_register">Registrate</button>
          </div>
        </div>

        <div className="contenedor_login_reg">
          <form action="" className="formulario_login">
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder="Correo Electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button>Entrar</button>
          </form>
          <form action="" className="formulario_registro">
            <h2>Registrarse</h2>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Correo" />
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;