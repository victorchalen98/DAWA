import React, { useState, useEffect } from 'react';
import "../stylesheets/Home.css"
import {Link} from "react-router-dom"

function Home() {

  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);

    const apiURL ="http://localhost:3200/home";

    useEffect(() => {
      (async () => {
        await getUsers();
      })();
    }, []);

    const getUsers = async () => {
      try{  
        const response = await fetch(apiURL);
        const data_response = await response.json();
        setUser(data_response.data);
        console.log(data_response.data);
      } catch (error) {
        setError(error);
      } 
    };
  

  return (

    <div className="contenedor-principal-tabla">

    <header className="header-home">
      <div className="logo">TecnoCat</div>
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

          {user?.map((elemento) => {
              return <tr key={elemento.id}>
                
                <td>{elemento.nombre}</td>
                <td>{elemento.modelo_telefono}</td>
                <td>{elemento.danio_telefono}</td>
                <td>{elemento.fecha_envio}</td>
                <td>{elemento.fecha_estimada_entrega}</td>
              </tr>
              })
          }

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

