//import logo from './logo.svg';
import './App.css';
import Candidata from "./components/Candidata.jsx"

function App() {
  return (
    <div className="App">
      <h1 className='titulo_pagina'>Eleccion de la Reina de la Facultad de Ciencias Matemáticas y Físicas</h1>
      <Candidata
      imagen="reina_1"
      nombre="Ines Valentina Ramirez"
      edad="20 años"
      signo="Acuario"
      hobby="Jugar Tenis y ver peliculas"
      frase="La palabra tiene mucho de aritmética: divide cuando se utiliza como navaja, para lesionar; resta 
      cuando se usa con ligereza para censurar; suma cuando se emplea para dialogar, y multiplica cuando se da 
      con generosidad para servir."
      />
      <br/>

      <Candidata
      imagen="reina_2"
      nombre="Alejandra Ceballos Coral"
      edad="18 años"
      signo="Piscis"
      hobby="Bailar y hacer deporte"
      frase="La palabra tiene mucho de aritmética: divide cuando se utiliza como navaja, para lesionar; resta 
      cuando se usa con ligereza para censurar; suma cuando se emplea para dialogar, y multiplica cuando se da 
      con generosidad para servir."
      />
      <br/>
      <Candidata
      imagen="reina_3"
      nombre="Karen Pazmiño Romero"
      edad="21 años"
      signo="Tauro"
      hobby="Tocar piano y hacer gimnasia"
      frase="La palabra tiene mucho de aritmética: divide cuando se utiliza como navaja, para lesionar; resta 
      cuando se usa con ligereza para censurar; suma cuando se emplea para dialogar, y multiplica cuando se da 
      con generosidad para servir."
      />
      <br/>
    </div>
  );
}

export default App;



/* 

               <p className="texto_datos"> Nombre: Ines Valentina Ramirez</p> 
               <p className="texto_datos"> Edad: 20 años</p> 
               <p className="texto_datos"> Signo Zodiacal: Acuario</p> 
               <p className="texto_datos"> Hooby: Jugar Tenis y ver peliculas</p>
               <p className="texto_datos"> Frase: La palabra tiene mucho de aritmética: divide cuando se utiliza como navaja, para lesionar; resta cuando se usa con ligereza para censurar; suma cuando se emplea para dialogar, y multiplica cuando se da con generosidad para servir</p> 
*/