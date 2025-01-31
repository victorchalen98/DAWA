import { Link } from "react-router-dom";
import "../stylesheets/Register.css";


const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1 className="title-register">AlumniUG</h1>
          <p>
          Regístrate ahora para interactuar con estudiantes y profesores, y participa en 
          una red dinámica y colaborativa. <br /> Completa el formulario de registro y sé parte de nuestra 
          comunidad universitaria en línea.
          </p>
          <span className="span-pregunta">Ya tienes una cuenta?</span>
          <Link to="/login">
          <button className="btn-register-login">Iniciar Sesion</button>
          </Link>
        </div>
        <div className="right">
          <h1 className="right-register">Registrate</h1>
          <form className="form-right">
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <input type="text" placeholder="Nombre" />
            <Link to="/login">
            <button className="btn-register-register">Registrarse</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;