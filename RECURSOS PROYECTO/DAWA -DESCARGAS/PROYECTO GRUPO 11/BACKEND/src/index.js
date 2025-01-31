import express from "express";
import {PORT, config_core} from './config/config.js';
import routes_users from "./routes/users_routes.js";
import cors from 'cors';

const app = express();

// definir politicas de acceso al API
app.use(cors(config_core.application.cors.server));

// Los responses sean en formato Json
app.use(express.json());

// Rutas que escucha y estan establecidas
app.use(routes_users);

//Respuesta para acceso a rutas no válidas
app.use((req, res, next) => {
    res.status(404).json({message: "Ruta No Válida"});
})

app.listen(PORT, () => {console.log("Servidor Escuchando por el puerto", PORT);})