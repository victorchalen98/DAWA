import { Link } from "react-router-dom";
import "../stylesheets/Login.css";

const Login = () => {
    return(
        <div className="login">
            <div className="card-login">
                <div className="left-login">
                    <h1 className="title-login">AlumniUG</h1>
                    <p>Bienvenido a AlumniUG, la red social exclusiva para la comunidad de la Universidad de Guayaquil. 
                        Conéctate con tus compañeros, comparte conocimientos y participa en debates sobre temas de 
                        interés común. <br /> Ingresa tus credenciales para comenzar a explorar todo lo que AlumniUG tiene 
                        para ofrecerte.
                        </p>
                    <span className="left-span">No tienes una cuenta?</span>
                    <Link to="/register">
                    <button className="btn-register">Registrate</button>
                    </Link>
                </div>
                <div className="right">
                    <h1 className="right-title">Login</h1>
                    <form action="">
                        <input type="text" placeholder="Usuario"/>
                        <input type="password" placeholder="Contraseña"/>
                        <Link to="/">
                        <button className="btn-login">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;