import React, { useState } from 'react'
import "../stylesheets/Signup.css"
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Validation';
//import Axios from 'axios'

function Signup (){

    const [nameReg, SetNameReg] = useState("");
    const [emailReg, SetEmailReg] = useState("");
    const [passwordReg, SetPasswordReg] = useState("");

    /*const register = () =>{
        Axios.post("http://localhost:3200/signup", {
            nombre: nameReg, 
            correo_electronico: emailReg, 
            contrasena: passwordReg
        }).then((response)=>{
            console.log(response);
        })
    }*/

    const [values, setValues] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    
    };

    return(
        <div className="contenedor-principal-log"> 
            <div className="contenedor-formulario-log">
                <form action="" onSubmit={handleSubmit}>
                    <div class="cabecera-log">
                        <h1>EXAMEN</h1>
                        <header>Crear nuevo usuario</header>
                    </div>
                    <div className="etiqueta">       
                        <input className="campo-valores" type="text" 
                         name="name" placeholder="Ingrese su nombre" onChange={(e) =>{SetNameReg(e.target.value)}}/>
                         {errors.name && <span className="texto-error">{errors.name}</span>}
                        
                    </div>
                    <div className="etiqueta-log">       
                        <input className="campo-valores-log" type="text" 
                        name="email"  placeholder="Ingrese su correo" onChange={(e) =>{SetEmailReg(e.target.value)}}/>
                        {errors.email && <span className="texto-error">{errors.email}</span>}
                         
                    </div>
                    <div className="etiqueta-log">                        
                        <input className="campo-valores-log" type="password" 
                         name="password"  placeholder="Ingrese su contraseña" onChange={(e) =>{SetPasswordReg(e.target.value)}}/>
                        {errors.password && <span className="texto-error">{errors.password}</span>}
                    </div> 

                    <div class="iniciar-sesion-log">
                    <button class="btn-login-log" id="submit"></button>
                    <Link to="/"><label for="submit">Registrarse</label></Link>
                    </div>

                    <div class="sign-up-link-log">
                        <p>Ya tienes una cuenta? <Link to="/">Inicia sesión</Link></p>
                        
                    </div>
                    
                </form>
                
            </div>
            
        </div>
    );
}

export default Signup;