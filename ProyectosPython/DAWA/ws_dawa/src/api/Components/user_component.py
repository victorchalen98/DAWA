from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class UserComponent:
    @staticmethod
    def get_all_user():
        try:
            result = False
            data = None
            message = None

            sql = "SELECT * FROM dawa.tb_user WHERE u_state = true"

            result_user = DataBaseHandle.getRecords(sql, 0)
            if result_user['result']:
                result = True
                data = result_user['data']
            else:
                message = result_user[('message')]
        except Exception as err:
            HandleLogs.write_log("Error al buscar usuarios " + str(err))
            HandleLogs.write_error(err)
            message = "Ocurrio un error al buscar usuarios " + err.__str__()
        finally:
            return internal_response(result, data, message)