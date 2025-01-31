import express, { request } from "express";
import {PORT, config_core} from './src/config/config.js';
import routes_estudiante from "./src/routes/routes_estudiantes.js";
import cors from 'cors';

// Levantar el servidor express
const app = express();
//definir las politicas de acceso
app.use(cors(config_core.application.cors.server));

//definir que las respuestas sean en formato json
app.use(express.json());

//Las ruta establecidas que van a responder el server
app.use(routes_estudiante);

//Cuando haya acceso a rutas no validas
app.use((req, res, next) => {
  res.status(404).json({message: "Ruta no es Válida"})  
});

PORT = 3200
HOST_DB = localhost
USER_DB = admin
PASSWORD = system
DATABASE = dawa
PORT_DB = 3306
//habilitar el server para que escuche a traves del puerto 
app.listen(PORT, () =>{console.log("Servidor Escuchando por el puerto "+PORT);})