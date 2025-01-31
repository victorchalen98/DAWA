import express, { request } from "express";
import {PORT, config_core} from './src/config/config.js';
import routes_red_social from "./src/routes/routes_red_social.js";
import cors from 'cors';

// Levantar el servidor express
const app = express();
//definir las politicas de acceso
app.use(cors(config_core.application.cors.server));

//definir que las respuestas sean en formato json
app.use(express.json());

//Las ruta establecidas que van a responder el server
app.use(routes_red_social);

//Cuando haya acceso a rutas no validas
app.use((req, res, next) => {
  res.status(404).json({message: "Ruta no es Válida"})  
});

//habilitar el server para que escuche a traves del puerto 
app.listen(PORT, () =>{console.log("Servidor Escuchando por el puerto "+PORT);})