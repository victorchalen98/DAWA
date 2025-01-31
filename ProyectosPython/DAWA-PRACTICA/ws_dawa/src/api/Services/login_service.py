from flask import request
from flask_restful import Resource
from ..Components.login_componet import LoginComponent
from ..Model.Request.login_request import LoginRequest
from  ...utils.general.logs import HandleLogs
from  ...utils.general.response import response_error, response_success

class LoginService(Resource):
    @staticmethod
    def post():
        try:
            HandleLogs.write_log("Servicio de Login Ejecutando")
            # Obtener el request
            rq_json = request.get_json()
            # Validar que el request sea compartible con el modelo
            new_request = LoginRequest()
            error_en_validacion = new_request.validate(rq_json)
            if error_en_validacion:
                HandleLogs.write_log("Error al validar el Request -> " + str(error_en_validacion))
                return response_error("Error al validar el Request -> " + str(error_en_validacion))
            # Llamo al metodo del componente
            result_login = LoginComponent.Login(rq_json['login_user'], rq_json['login_password'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el servicio ->" + err.__str__())
