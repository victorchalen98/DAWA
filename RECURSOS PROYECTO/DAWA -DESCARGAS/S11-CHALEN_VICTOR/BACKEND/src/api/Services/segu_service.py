from ws_dawa.src.utils.general.logs import HandleLogs
from ws_dawa.src.utils.general.response import response_error, response_success, response_not_found
from ws_dawa.src.api.Components.segu_component import SeguComponent
from ws_dawa.src.api.Model.Request.segu_request import SeguRequest
from flask import request
from flask_restful import Resource


class SeguService(Resource):
    @staticmethod
    def post():
        try:
            HandleLogs.write_log("Verifica Credenciales y Devuelve Datos del Usuario")
            # Obtener el request
            rq_json = request.get_json()
            # Validar ese request sea compatible con el modelo
            new_request = SeguRequest()
            error_en_validacion = new_request.validate(rq_json)

            if error_en_validacion:
                HandleLogs.write_error("Error al validar el request -> " + str(error_en_validacion))
                return response_error("Error al validar el request -> " + str(error_en_validacion))

            resultado = SeguComponent.getDatosUser(rq_json['login_user'], rq_json['login_password'])
            if resultado['result']:
                return response_success("Login Exitoso")
            else:
                return response_error(resultado['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())
