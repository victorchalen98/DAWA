from flask import request
from flask_restful import Resource
from ..Components.user_component import UserComponent
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success
from ..Components.jwt_component import JWTComponent

class UserService(Resource):
    @staticmethod
    def get():
        try:
            HandleLogs.write_log("Servicio de Consulta de Usuarios Ejecutando")
            #Obtener el token y validarlo
            token = request.headers['tokenapp']
            if not (JWTComponent.token_validate(token)):
                return response_error("Token no valido")
            # Llamar al metodo del componente
            result_user = UserComponent.get_all_user()
            if result_user['result']:
                return response_success(result_user['data'])
            else:
                return response_error(result_user['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el servicio ->" + err.__str__())

