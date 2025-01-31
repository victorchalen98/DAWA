import React, { useState } from 'react';
import "../Chalen_Styles/Chalen_InicioSesion.css";

const Chalen_InicioSesion = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('admin');  

  
  const handleLogin = () => {
    if (!isLoggedIn) {
      
      setUsername('admin');
      setIsLoggedIn(true);
    }
  };

  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(''); 
    window.location.reload();
  };

  return (
    <div className="boton-sesion-container">
      {isLoggedIn && (
        <span className="usuario-conectado">
          Bienvenido, <strong>{username}</strong>
        </span>
      )}
      <button
        onClick={isLoggedIn ? handleLogout : handleLogin}
        className={`boton-sesion ${isLoggedIn ? 'boton-cerrar-sesion' : 'boton-iniciar-sesion'}`}
      >
        {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
      </button>
    </div>
  );
};

export default Chalen_InicioSesion;
