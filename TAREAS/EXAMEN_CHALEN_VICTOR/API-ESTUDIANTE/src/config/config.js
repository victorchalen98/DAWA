import { config } from "dotenv";
import { application } from "express";

config();

//exportando las variables del .env
export const PORT = process.env.PORT;
export const HOST_DB = process.env.HOST_DB;
export const USER_DB = process.env.USER_DB;
export const PASSWORD = process.env.PASSWORD;
export const DATABASE = process.env.DATABASE;
export const PORT_DB = process.env.PORT_DB;

export const config_core = {
    application:{
        cors:{
            server:[
                {
                    origin: "localhost:3200",
                    Credential: true
                }
            ]
        }
    }


}