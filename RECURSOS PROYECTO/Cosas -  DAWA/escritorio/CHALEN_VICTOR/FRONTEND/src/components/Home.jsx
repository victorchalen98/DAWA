import React, { useState, useEffect } from 'react';
import "../stylesheets/Home.css"
import {Link} from "react-router-dom"

function Home() {

  const [user, setUser] = useState(null);

  const Users = () =>{
    useEffect(() => {
      fetch("http://localhost:3005/home")
      .then(res => res.json())
      .them(data => {
        console.log(data);

        const userData = {
          id: data.result[0].id,
          nombre_usuario: data.result[0].nombre.first,
          id_rol: data.result[0].id_rol,
          rol: data.result[0].rol,
        }

        setUser(userData);
      })
    }, []);
  };

  return (

    <div className="contenedor-principal-tabla">

    <header className="header-home">
      <div className="logo">EXAMEN</div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      <Link to="/"><button className="logout-button">Cerrar Sesión</button></Link>
    </header>  
    
    {user ? (<div >
      <h2>Hola {user.name}</h2>
      <p className= "saludo">Buenos dias</p>
   
      <table className='tabla-usuario'>
        <thead className='titulos-tabla'>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>id Rol</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>

        {user.map(user => (
              <tr key={user.id}>
                <td>{user.nombre_usuario}</td>
                <td>{user.id-rol}</td>
                <td>{user.rol}</td>
              </tr>
            ))}

        </tbody>
      </table>
      <br/> <br/>
    </div>): null }

    </div>
  );
}

export default Home;
