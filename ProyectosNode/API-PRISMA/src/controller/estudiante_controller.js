import { db_pool_connection } from "../database/db.js";
import { response_sucess, response_created, response_not_found, response_error  }  from "../responses/response.js";

export const seleccionarEstudiantes = async (req, res) => {
    try{
       //ejecutar el query a la base da datos para obtener los datos de los estudiantes
       const [rows] = await db_pool_connection.query('SELECT * FROM tb_estudiante');
       console.log(rows);
       //controlamos que hay registros
       if (rows.length <= 0)
            res.status(404).json(response_not_found("No hay datos de Estudiante"));
            //en el caso que existan registros devueltos por la DB
        res.status(200).json(response_sucess(rows, "Consulta Exitosa")); 

    }
    catch(error){
        res.status(500).json(response_error(500, "Error al obtener los datos del estudiante -> " + error['sqlMessage']));
    }

}