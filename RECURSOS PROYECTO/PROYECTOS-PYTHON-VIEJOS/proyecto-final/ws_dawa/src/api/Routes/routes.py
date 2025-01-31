from ..Services.login_service import LoginService
from ..Services.user_service import UserService

def load_routes(api):
    #metodo para el login
    api.add_resource(LoginService, '/login')
    #metodo para listar los usuarios
    api.add_resource(UserService, '/usuario/list')

