import React, { useState, useEffect } from 'react';
import "../stylesheets/Home.css"
import {Link} from "react-router-dom"

function Home() {

  const [user, setUser] = useState(null);

  const Users = () =>{
    useEffect(() => {
      fetch("http://localhost:3200/home")
      .then(res => res.json())
      .them(data => {
        console.log(data);

        const userData = {
          id: 1,
          nombre: data.result[0].nombre.first,
          correo_electronico: data.result[0].correo_electronico,
          modelo_telefono: data.result[0].modelo_telefono,
          danio_telefono: data.result[0].danio_telefono,
          fecha_envio: data.result[0].fecha_envio,
          fecha_estimada_entrega: data.result[0].fecha_estimada_entrega
        }

        setUser(userData);
      })
    }, []);
  };

  return (

    <div className="contenedor-principal-tabla">

    <header className="header-home">
      <div className="logo">EL JUAN S.A.</div>
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
      <p className= "saludo">Recupera la funcionalidad de tu smartphone con nuestros servicios de reparación de alta calidad</p>
   
      <table className='tabla-usuario'>
        <thead className='titulos-tabla'>
          <tr>
            <th>Nombre</th>
            <th>Modelo Del Teléfono</th>
            <th>Daño Del Teléfono</th>
            <th>Fecha De Envío</th>
            <th>Fecha Estimada  De Entrega</th>
          </tr>
        </thead>
        <tbody>

        {user.map(user => (
              <tr key={user.id}>
                <td>{user.nombre}</td>
                <td>{user.modelo_telefono}</td>
                <td>{user.danio_telefono}</td>
                <td>{user.fecha_envio}</td>
                <td>{user.fecha_estimada_entrega}</td>
              </tr>
            ))}

        </tbody>
      </table>
      <br/> <br/>
      <p className= "mensaje">Gracias por elegirnos para la reparación de tu teléfono. Estamos aquí para ofrecerte un servicio rápido y de alta calidad, asegurándonos de que tu dispositivo vuelva a funcionar como nuevo.
            <br /> <br />
          Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos. Estamos a tu disposición para ayudarte en todo lo que necesites.</p>
    </div>): null }

    </div>
  );
}

export default Home;
