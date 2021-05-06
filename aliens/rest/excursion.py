from aliens.models.excursion import Excursion
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
from flask import request
import json
from flask import jsonify



resource_fields = {
    'id': fields.Integer,
    'guide': fields.Nested({"id": fields.Integer}),
    'participants': fields.List(fields.Nested({"id": fields.Integer})),
    'date': fields.DateTime(),
    '_links': {
        "self": fields.Url('excursion'), 
        "collection": fields.Url('excursions')
    }
}

collection_fields = {
    "amount": fields.Integer,
    "excursions": fields.List(fields.Nested(resource_fields))
}


parser = reqparse.RequestParser()


def abort_if_doesnt_exist(id):
    if Excursion.query.get(id) is None:
        abort(404, message="Excursion with id {} doesn't exist".format(id))


class ExcursionRest(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        abort_if_doesnt_exist(id)
        return Excursion.query.get(id)

    def post(self, id):
        pass

    def put(self, id):
        pass


class ExcursionsRest(Resource):
    @marshal_with(collection_fields)
    def get(self):
        print(parser.parse_args())
        result = Excursion.query.all()
        return {
            "amount": len(result),
            "excursions": result
        }
