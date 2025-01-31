import { Router } from "express";
import { seleccionarTablas,seleccionarUsuarioByComReact} from "../controller/red_social_controller.js";

//Iniciar el Router
const routes_red_social = new Router();

//Empiezo a agregar mis rutas
routes_red_social.get('/redsocial', seleccionarTablas);

routes_red_social.get('/redsocial/seleccionar/:id', seleccionarUsuarioByComReact);



/*routes_estudiante.get('/estudiante/:id', seleccionarEstudiantesById);
routes_estudiante.post('/estudiante/crear', insertarEstudiante);*/

export default routes_red_social;