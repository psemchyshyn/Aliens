from aliens.models.escape import Escape
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
from flask import request
import json
from flask import jsonify



resource_fields = {
    'id': fields.Integer,
    'human_id': fields.Integer,
    'spaceship_id': fields.Integer,
    'date': fields.DateTime(),
    '_links': {
        "self": fields.Url('escape'), 
        "collection": fields.Url('escapes')
    }
}

collection_fields = {
    "amount": fields.Integer,
    "escapes": fields.List(fields.Nested(resource_fields))
}


parser = reqparse.RequestParser()



def abort_if_doesnt_exist(id):
    if Escape.query.get(id) is None:
        abort(404, message="Escape with id {} doesn't exist".format(id))


class EscapeRest(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        abort_if_doesnt_exist(id)
        return Escape.query.get(id)

    def post(self, id):
        pass

    def put(self, id):
        pass


class EscapesRest(Resource):
    @marshal_with(collection_fields)
    def get(self):
        print(parser.parse_args())
        result = Escape.query.all()
        return {
            "amount": len(result),
            "escapes": result
        }
