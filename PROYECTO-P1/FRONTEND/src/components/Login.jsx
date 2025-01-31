import React, { useState } from "react";
import "../stylesheets/Login.css"
import {Link, useNavigate } from "react-router-dom"
import Validation from './Validation';
//import Axios from 'axios';


function Login (){

    const [correo_electronico, SetEmail] = useState("");
    const [contrasena, SetPassword] = useState("");
    
    const [loginStatus, setLoginStatus] = useState("");
   /* const login = () =>{
        Axios.post("http://localhost:3200/login1", {
            correo_electronico: correo_electronico, 
            contrasena: contrasena
        }).then((response)=>{
            console.log(response.data);
        })
    }*/
    const [values, setValues] = useState(
        { email: "", password: "" 

        });
   const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [backendError, setBackendError] = useState([]);
    const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);

    };
    return(
        <div className="contenedor-principal"> 
            <div className="contenedor-formulario">
                <form action="" onSubmit={handleSubmit}>
                    <div class="cabecera">
                        <h1>TecnoCat</h1>
                        <header>Iniciar sesión</header>
                    </div>
                    <div className="etiqueta">       
                        <input className="campo-valores" type="text" name="email" 
                        placeholder="Ingrese su correo" onChange={(e) =>{SetEmail(e.target.value)}}/>
                        {errors.email && <span className="texto-error">{errors.email}</span>}
                    </div>
                    <div className="etiqueta">                        
                        <input className="campo-valores" type="password" 
                        name="password" placeholder="Ingrese su contraseña" onChange={(e) =>{SetPassword(e.target.value)}}/> 
                        {errors.password && <span className="texto-error">{errors.password}</span>}
                    </div> 

                    <div class="iniciar-sesion">
                    <button class="btn-login" id="submit"></button>
                    <Link to="/home"><label for="submit" type="submit">Iniciar sesión</label></Link>  
                    </div>

                    <div class="sign-up-link">
                    <p>No tienes una cuenta? <Link to="/signup">Registrate</Link></p>
                    </div>
                    
                </form>
                
            </div>

        </div>
    )
}

export default Login;