from ...utils.general.logs import HandleLogs
from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.response import internal_response

class LoginComponent:

    @staticmethod
    def Login(p_user, p_clave):
        try:
            data = None
            message = None
            result = False
            sql = "SELECT COUNT (*) as valor FROM data.tb_user WHERE u_login = %s and u_password = % and u_state = true"

            record = (p_user, p_clave)

            login_result = DataBaseHandle.getRecords(sql, 1, record)
            if login_result['result']:
                if login_result['data']['valor'] > 0:
                    result = True
                    message = 'Login Exitoso'
                    data = "TokenValue"
                else:
                    message = 'Login Invalido'
            else:
                HandleLogs.write_log("Error al Ejecutar Login ->" +login_result['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            message = 'Error en el login ->' +err.__str__()
        finally:
            return internal_response(result, data, message)