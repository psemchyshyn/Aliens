from aliens.models.objects import Spaceship
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
import json
from flask import jsonify



resource_fields = {
    'name':   fields.String,
    'experiments': fields.List(fields.Nested({"id": fields.Integer})),
    '_links': {
        "self": fields.Url('spaceship'), 
        "collection": fields.Url('spaceships')
    }
}

collection_fields = {
    "amount": fields.Integer,
    "spaceships": fields.List(fields.Nested(resource_fields))
}


parser = reqparse.RequestParser()
parser.add_argument('name')


def abort_if_doesnt_exist(id):
    if Spaceship.query.get(id) is None:
        abort(404, message="Spaceship with id {} doesn't exist".format(id))


class SpaceshipRest(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        abort_if_doesnt_exist(id)
        return Spaceship.query.get(id)

    def post(self, id):
        pass

    def put(self, id):
        pass


class SpaceshipsRest(Resource):
    @marshal_with(collection_fields)
    def get(self):
        result = Spaceship.query.all()
        return {"amount": len(result), "spaceships": result}
