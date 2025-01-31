import { Router } from "express";
import {verificarUsuario, listarUsuario } from "../controllers/users_controllers.js";

const routes_users = new Router();


routes_users.post("/segu/login", verificarUsuario);
routes_users.get("/segu/user/list", listarUsuario);


export default routes_users;