import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader, Button, Alert} from "reactstrap";

function Estudiante () {


    const datos_estudiantes = [
        {id: 1, cedula: "0920101010", nombre: "Juan Carlos", apellido: "Cedeño"},
        {id: 2, cedula: "0920201010", nombre: "Maria", apellido: "Castillo"},
        {id: 3, cedula: "0920301010", nombre: "Ricardo", apellido: "Zambrano"},
        {id: 4, cedula: "0920401010", nombre: "Lionel", apellido: "Pino"},
    ]    
    //hook para manejar el estado de los datos de los estudiantes
    const [data, setData] = useState(datos_estudiantes);
    //Hook para manejar el estado del estudiante seleccionado
    const [estudiante_seleccionado, setEstudianteSeleccionado] = useState({id: 0, cedula: "", nombre: "", apellido: ""});
    //BANDERAS
    //Hook para manejar el estado de apertura del modal de editar
    const [banderaEditar, setBanderaEditar] = useState (false);
    //Hook para manejar el estado de apertura de eliminar 
    const [banderaEliminar, setBanderaEliminar] = useState(false);
    //hook para manjear el estado de apertura del modal de insertar
    const[banderaInsertar, setBanderaInsertar] = useState(false);

    //controlar cambios en la caja de texto
    const handleChangeInput = e => {
        const {name, value} = e.target;
        setEstudianteSeleccionado((prevState) =>(
            { ...prevState, [name]: value }
        ));
        console.log(estudiante_seleccionado);
    }
    
    //metodo para seleccionar estudiante
    const seleccionarEstudiante = (elemento, tipo) => {
        setEstudianteSeleccionado(elemento);
        //control de apertura de los modales segun tipo
        (tipo === "Editar") && setBanderaEditar(true);
        (tipo === "Eliminar") && setBanderaEliminar(true);
        (tipo === "Insertar") && setBanderaInsertar(true);
    }

    //metodo para editar estudiante
    const editarEstudiante = () => {
        var datos_nuevos = data;
        datos_nuevos.map( estudiante => {
            if (estudiante.id === estudiante_seleccionado.id){
                estudiante.cedula = estudiante_seleccionado.cedula;
                estudiante.nombre = estudiante_seleccionado.nombre;
                estudiante.apellido = estudiante_seleccionado.apellido;
            }
        });
        setData(datos_nuevos); //actualiza los nuevos datos
        setBanderaEditar(false); //cierra el modal editar
    }

    const eliminarEstudiante = () => {
        //filtrar todos los elementos a excepcion del que tiene id igual al seleccionado
        var datos_nuevos = data.filter(estudiante=>estudiante.id != estudiante_seleccionado.id)
        //setear nuevos datos
        setData(datos_nuevos);
        //cerrar el modal
        setBanderaEliminar(false);
    }

    //metodo para insertar el estudiante
    const insertarEstudiante = () => {
        var nuevo_estudiante = estudiante_seleccionado;
        var nueva_lista = data;
        //setear el nuevo id del estudiante
        nuevo_estudiante.id = nueva_lista[nueva_lista.length -1].id +1 ;
        nueva_lista.push(nuevo_estudiante);
        setData(nueva_lista);
        setBanderaInsertar(false);
    }


    return(
        <div>
        <h3>Listado de Estudiantes</h3>
        <Button 
            color='success'
            large='lg'
            onClick={() =>seleccionarEstudiante(null, "Insertar")}
        >
            Insertar
        </Button>
        <br />

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Cedula</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(elemento =>(
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.cedula}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.apellido}</td>
                            <td>
                                <button 
                                    className='btn btn-primary'
                                    onClick={() => {seleccionarEstudiante(elemento, "Editar")}} 
                                >
                                    Editar
                                </button>
                                <button className='btn btn-danger' 
                                    onClick={() => {seleccionarEstudiante(elemento, "Eliminar")}}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                } 
                </tbody>
            </table>
            
            <Modal isOpen={banderaEditar}>
                <ModalHeader>
                    <div>
                        <h4>Edición de Estudiante</h4>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className='form-group'>
                        <label>Id</label>
                        <input
                            className='form-control'
                            readOnly
                            type='text'
                            name='id'
                            value= {estudiante_seleccionado && estudiante_seleccionado.id}
                        />
                        <label>Cedula</label>
                        <input
                            className='form-control'
                            type='text'
                            name='cedula'
                            onChange={handleChangeInput}
                            value={estudiante_seleccionado && estudiante_seleccionado.cedula}
                        />

                        <label>Nombre</label>
                        <input
                            className='form-control'
                            type='text'
                            name='nombre'
                            onChange={handleChangeInput}
                            value={estudiante_seleccionado && estudiante_seleccionado.nombre}
                        />

                        <label>Apellido</label>
                        <input
                            className='form-control'
                            type='text'
                            name='apellido'
                            onChange={handleChangeInput}
                            value={estudiante_seleccionado && estudiante_seleccionado.apellido}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary' onClick={() =>{editarEstudiante()}}>
                        Guardar
                    </button>
                    <button className='btn btn-danger' onClick={() =>{setBanderaEditar(false)}}>
                        Cancelar
                    </button>
                </ModalFooter>

            </Modal>

            <Modal isOpen={banderaEliminar}>
                <ModalBody>
                    ¿Está seguro que desea eliminar el registro de estudiante?
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary' onClick={()=>eliminarEstudiante()}>
                        Si
                    </button>
                    <button className='btn btn-danger' onClick={()=>setBanderaEliminar(false)}>
                        No
                    </button>
                </ModalFooter>

            </Modal>
            <Modal isOpen={banderaInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Insertar Datos de Estudiante</h3>
                    </div>
                </ModalHeader>
                <ModalBody>

                    <div className='form-group'>
                        <label>Id</label>
                        <input
                            className='form-control'
                            readOnly
                            type='text'
                            name='id'
                            value= {data[data.length -1].id + 1}
                        />
                        <label>Cedula</label>
                        <input
                            className='form-control'
                            type='text'
                            name='cedula'
                            onChange={handleChangeInput}
                            value={estudiante_seleccionado ? estudiante_seleccionado.cedula : "" }
                        />

                        <label>Nombre</label>
                        <input
                            className='form-control'
                            type='text'
                            name='nombre'
                            onChange={handleChangeInput}
                            value={estudiante_seleccionado ? estudiante_seleccionado.nombre : ""}
                        />

                        <label>Apellido</label>
                        <input
                            className='form-control'
                            type='text'
                            name='apellido'
                            onChange={handleChangeInput}
                            value={estudiante_seleccionado ? estudiante_seleccionado.apellido : ""}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary' onClick={() => {insertarEstudiante()}}>
                        Guardar
                    </button>
                    <button className='btn btn-danger' onClick={() => {setBanderaInsertar(false)}}>
                        Cancelar
                    </button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Estudiante;