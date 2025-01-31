from ws_dawa.src.api.Services.segu_service import SeguService

def load_routes(api):
    #metodo confirma credenciales y devuelve datos
    api.add_resource(SeguService, '/segu/login')

