import { db_pool_connection } from "../database/db.js";
import { response_sucess, response_created, response_not_found, response_error, response_bad_request  }  from "../responses/response.js";

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

export const seleccionarEstudiantesById = async (req, res) => {
    try{
        //Obtener el parametro
        const id = req.params.id;
        if(id == null)
            return res.status(400).json(response_bad_request("Parametro Id no Válido"))
        // ejecutar el query en la base de datos y almacenar en rows
        const[rows] = await db_pool_connection.query('SELECT * FROM tb_estudiante where id=?', [id]);
        console.log(rows);
        if(rows.length <= 0){
            return res.status(404).json(response_not_found("No se encontraron registros de estudiantes"));
        }
        return res.status(200).json(response_sucess(rows, "Consulta exitosa"))
    } catch(error){
        res.status(500).json(response_error(500, "Error al obtener los datos de los estudiantes => "+error['sqlMessage']))
    }
}

export const insertarEstudiante = async (req, res) => {
    try{
        const { cedula, nombres, apellidos, genero, estado} = req.body;
        const [rows] = await db_pool_connection.query("INSERT INTO tb_estudiante (cedula, nombres, apellidos, genero, estado) VALUES (?,?,?,?,?)",
        [cedula, nombres, apellidos, genero, estado]);
        res.status(201).json(response_created(rows.insertId, "Estudiante Ingresado con Exito"));
    } catch(error){
        res.status(500).json(response_error(500, "Error al insertar los datos de los estudiantes => "+error['sqlMessage']))
    }

}