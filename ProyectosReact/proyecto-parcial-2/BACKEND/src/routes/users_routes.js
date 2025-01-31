import { Router } from "express";
import { verificarUser, RegistrarUser, listarUser } from "../controllers/users_controllers.js";

const routes_users = new Router();


routes_users.post("/login", verificarUser);
routes_users.post("/signup", RegistrarUser);

routes_users.get("/home", listarUser);

export default routes_users;