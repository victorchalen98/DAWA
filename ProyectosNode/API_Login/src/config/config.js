import { config } from "dotenv";
import { application } from "express";

config();

export const PORT = process.env.PORT;
export const PORT_DB = process.env.PORT_DB || 3306;
export const USER_DB = process.env.USER_DB;
export const PASSWORD_DB = process.env.PASSWORD_DB;
export const DATABASE = process.env.DATABASE;
export const HOST_DB = process.env.HOST_DB;

export const config_core = {
    application: {
        cors: {
            server: [{
                origin: "localhost:3200", // acceso es por server , publico *
                credentials: true
            }]
        }
    }

}