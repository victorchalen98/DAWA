import { db_pool_connection } from "../database/db.js";
import { response_created, response_not_found, response_sucess, response_bad_request, response_error } from "../responses/responses.js";
//import bcrypt from "bcrypt"

export const verificarUser = async (req, res) => {
    try {
        const { correo_electronico, contrasena  } = req.body;
        // Ejecutar el query en la base de datos y almacenar el resultado en rows
        const [rows] = await db_pool_connection.query('SELECT * FROM clientes where correo_electronico = ? AND contrasena = ?', 
            [correo_electronico, contrasena]);
        
			if (correo_electronico || contrasena) {
                console.log(rows[0].correo_electronico);
                console.log(rows[0].contrasena);

			} else {
				res.send('Correo y contraseña no puede ser vacio');
			}			
			res.end();		
    }
    catch (error) {
        res.status(500).json(response_error(500, "Error al verificar las credenciales => " + error.message));
    }
};

export const RegistrarUser = async (req, res) => {

    const nombre = require.body.name
    const email = require.body.correo_electronico
    const contrasena = require.body.contrasena

    try {
        const { nombre, correo_electronico, contrasena } = req.body;
        // Ejecutar el query en la base de datos y almacenar el resultado en rows
        const [rows] = await db_pool_connection.query('INSERT INTO clientes (nombre, correo_electronico, contrasena) VALUES (?,?,?)', 
            [nombre, correo_electronico, contrasena]);
        
    }
    catch (error) {
        res.status(500).json(response_error(500, "Error al verificar las credenciales => " + error.message));
    }
};

export const listarUser = async (req, res)  => {

    try{
        const [rows] = await db_pool_connection.query('SELECT * FROM clientes;');
        console.log(rows);

        if (rows.length <= 0){
            return res.status(404).json(response_not_found("No se encontraron registros de clientes"));
        }
        return res.status(200).json(response_sucess(rows, "Consulta Exitosa"));

    }
    catch(error){
        res.status(500).json(response_error(500,"Error al obtener los datos de los clientes => " + error['sqlMessage']));
    }
}