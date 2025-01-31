import { Link } from "react-router-dom";
import "../stylesheets/Login.css";

const Login = () => {
    return(
        <div className="login">
            <div className="card-login">
                <div className="left-login">
                    <h1 className="left-title">Hola mundo</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Amet alias assumenda magnam laboriosam cupiditate. Perferendis 
                        odit sunt aliquid repellendus corrupti.
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
                        <button className="btn-login">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;