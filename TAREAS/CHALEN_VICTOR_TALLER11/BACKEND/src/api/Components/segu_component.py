from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response
from ...utils.database.connection_db import DataBaseHandle

class SeguComponent:

    @staticmethod
    def getDatosUser(p_user, p_clave):
        try:
            result = False
            data = None
            message = None
            sql_login = "SELECT count(*) as valor FROM dawa.segu_user WHERE user_login_id = %s AND user_password = %s AND user_state = true"
            sql_user = "SELECT * FROM dawa.segu_user WHERE user_state = true"
            record = (p_user, p_clave)

            result_user = DataBaseHandle.getRecords(sql_user, 0)
            result_login = DataBaseHandle.getRecords(sql_login,1, record)

            if result_login['result']:
                if result_login['data']['valor'] > 0:
                    result = True
                    message = 'Login Exitoso'
                    data = result_user['data']
                else:
                    message = 'Error al Obtener datos de usuarios -> ' + result_user['message']
            else:
                message = result_user['message']

        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)
