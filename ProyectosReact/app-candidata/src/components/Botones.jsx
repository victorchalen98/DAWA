import React from "react";
import "../styles/boton.css"

function Botones({caption, is_liked, drivenClic}) {

    return(
        <button className={ is_liked ? 'boton-liked': 'boton-dislike'}
        onClick={drivenClic}>
           {caption} 
        </button>
    );
}

export default Botones;

