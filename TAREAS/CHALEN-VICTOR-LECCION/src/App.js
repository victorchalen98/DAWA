import './App.css';
import {React, useState } from 'react';
import Chalen_PaginaPrincipal from './Chalen_components/Chalen_PaginaPrincipal.jsx';
import Chalen_LoginModal from "./Chalen_components/Chalen_LoginModal.jsx"
import Chalen_InicioSesion from './Chalen_components/Chalen_InicioSesion.jsx';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Chalen_InicioSesion/>
      {isLoggedIn ? (
        <Chalen_PaginaPrincipal />
      ) : (
        <Chalen_LoginModal onLogin={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
