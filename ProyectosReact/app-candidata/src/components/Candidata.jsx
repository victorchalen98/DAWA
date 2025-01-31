import React from "react";
import "../styles/candidata.css";
import Botones from "./Botones.jsx";
import Contador from "./Contador.jsx"
import { useState } from "react";

function Candidata(props){

    const [numeroLikes, setNumeroLikes] = useState (0);

    const drivenLiked = () => {
        setNumeroLikes(numeroLikes + 1);
    }

    const drivenNotlike = () => {
        setNumeroLikes(numeroLikes -1);
    }

    return (
        <div className="contenedor_candidata">

            <img className="imagen_candidata" 
                src={require(`../images/${props.imagen}.jpeg`)}
                alt="Foto de la Candidata"/>

            <div className="contenedor_datos_candidata">
               <p className="texto_datos"> Nombre: {props.nombre}</p> 
               <p className="texto_datos"> Edad: {props.edad}</p> 
               <p className="texto_datos"> Signo Zodiacal: {props.signo}</p> 
               <p className="texto_datos"> Hooby: {props.hobby}</p>
               <p className="texto_datos"> Frase: {props.frase}</p>
            </div>

            <div>

                <Contador
                    numero_clics={numeroLikes}
                />

                <Botones 
                    caption="Like"
                    is_liked={true}
                    drivenClic={drivenLiked}
                />


                <Botones 
                    caption="Dislike"
                    is_liked={false}
                    drivenClic={drivenNotlike}
                />
            </div>

        </div>

    );
}

export default Candidata;

/* 

               <p className="texto_datos"> Nombre: Ines Valentina Ramirez</p> 
               <p className="texto_datos"> Edad: 20 años</p> 
               <p className="texto_datos"> Signo Zodiacal: Acuario</p> 
               <p className="texto_datos"> Hooby: Jugar Tenis y ver peliculas</p>
               <p className="texto_datos"> Frase: La palabra tiene mucho de aritmética: divide cuando se utiliza como navaja, para lesionar; resta cuando se usa con ligereza para censurar; suma cuando se emplea para dialogar, y multiplica cuando se da con generosidad para servir</p> 
*/