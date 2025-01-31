from ..Services.login_service import LoginService

def load_routes(api):
    api.add_resource(LoginService, 'security/Login')