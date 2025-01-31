import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState} from "react";
import {Modal, ModaBody, ModalFooter, ModalHeader, Alert} from "reactstrap"

function Estudiante (){


    const datos_estudiantes = [
        {id:1, cedula:"0920101010", nombre: "Juan Carlos", apellido: "Cedeño"},
        {id:2, cedula:"0930101010", nombre: "Pepe", apellido: "Suarez"},
        {id:3, cedula:"0940101010", nombre: "Pipo", apellido: "Messi"},
        {id:4, cedula:"0950101010", nombre: "Papo", apellido: "Neymar"},
    ]
    //hook para manejar el estado de los datos de los estudiantes
    const [data, setData] = useState(datos_estudiantes);


    return(
          <div>
            <h3>Listado de Estudiantes - Copia</h3>
            <table>
                <thead>

                </thead>
            </table>
          </div> 
    );
}

export default Estudiante;