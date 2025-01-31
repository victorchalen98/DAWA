import React from "react";
import '../styles/contador.css';

function Contador({numero_clics}){
    return(
        <div className="caja_contador">
            {numero_clics}
        </div>

    );
}

export default Contador;