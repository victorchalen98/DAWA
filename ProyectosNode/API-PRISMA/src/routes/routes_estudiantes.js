import { Router } from "express";
import { seleccionarEstudiantes } from "../controller/estudiante_controller.js";

//Iniciar el Router
const routes_estudiante = new Router();

//Empiezo a agregar mis rutas
routes_estudiante.get('/estudiante', seleccionarEstudiantes);

export default routes_estudiante;