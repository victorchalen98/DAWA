from marshmallow import Schema, fields


class LoginRequest(Schema):
    login_usuario = fields.String(required=True)
    login_nombre = fields.String(required=True)
