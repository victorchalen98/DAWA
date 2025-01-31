##from ws_dawa.src.api.Services.user_service import UserService
from ..Services.user_service import UserService
from ..Services.login_service import LoginService


def load_routes(api):
    api.add_resource(LoginService, '/security/login')
    api.add_resource(UserService, '/user/list')