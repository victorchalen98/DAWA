import { Router } from "express";
import { insertarEstudiante, seleccionarEstudiantes, seleccionarEstudiantesById } from "../controller/estudiante_controller.js";

//Iniciar el Router
const routes_estudiante = new Router();

//Empiezo a agregar mis rutas
routes_estudiante.get('/estudiante', seleccionarEstudiantes);
routes_estudiante.get('/estudiante/:id', seleccionarEstudiantesById);
routes_estudiante.post('/estudiante/crear', insertarEstudiante);

export default routes_estudiante;