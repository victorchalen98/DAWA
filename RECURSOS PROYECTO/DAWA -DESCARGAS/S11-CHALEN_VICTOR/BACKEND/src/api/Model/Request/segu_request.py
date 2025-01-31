from marshmallow import Schema, fields


class SeguRequest(Schema):
    login_user = fields.String(required=True)
    login_password = fields.String(required=True)
