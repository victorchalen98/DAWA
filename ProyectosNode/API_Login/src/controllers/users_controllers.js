import { db_pool_connection } from "../database/db.js";
import { response_created, response_not_found, response_sucess, response_bad_request } from "../responses/responses.js";



export const verificarUsuario = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verificar si los datos fueron enviados
        if (!username || !password) {
            return res.status(400).json({
                status: "error",
                message: "Debe proporcionar un usuario y contraseña."
            });
        }

        // Consultar en la base de datos el usuario con las credenciales proporcionadas
        const [rows] = await db_pool_connection.query('SELECT * FROM TB_USER WHERE username = ? AND password = ?',
            [username, password]);

        if (rows.length <= 0) {
            return res.status(401).json({
                status: "error",
                message: "Credenciales incorrectas."
            });
        }
        // Si se encuentra el usuario, devolver los datos
        return res.status(200).json({
            status: "success",
            message: "Autenticación exitosa.",
            data: rows
        });
    } catch (error) {
        console.error("Error en autenticarUsuario =>", error);
        return res.status(500).json({
            status: "error",
            message: "Error en el servidor al procesar la solicitud.",
            error: error.message
        });
    }
};

export const listarUsuario = async (req, res)  => {
    try{
        // ejecutar ek query en la base de datos y alamacenarlo en rows
        const [rows] = await db_pool_connection.query('SELECT * FROM TB_USER');
        console.log(rows);
        if (rows.length <= 0){
            return res.status(404).json(response_not_found("No se encontraron registros de estudiantes"));
        }
        return res.status(200).json(response_sucess(rows, "Consulta Exitosa"));

    }
    catch(error){
        res.status(500).json(response_error(500,"Error al obtener los datos de los estudiantes => " + error['sqlMessage']));
    }
}
