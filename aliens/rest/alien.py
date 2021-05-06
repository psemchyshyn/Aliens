from aliens.models.objects import Alien
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
import json
from flask import jsonify



resource_fields = {
    'name':   fields.String,
    'experiments': fields.List(fields.Nested({"id": fields.Integer})),
    'abductions': fields.List(fields.Nested({"id": fields.Integer})),
    'excursions': fields.List(fields.Nested({"id": fields.Integer})),
    'commutations': fields.List(fields.Nested({"id": fields.Integer})),
    'cemetery':  fields.List(fields.Nested({"id": fields.Integer})),
    '_links': {
        "self": fields.Url('alien'), 
        "collection": fields.Url('aliens')
    }
}

collection_fields = {
    "amount": fields.Integer,
    "aliens": fields.List(fields.Nested(resource_fields))
}


parser = reqparse.RequestParser()
parser.add_argument('name')


def abort_if_doesnt_exist(id):
    if Alien.query.get(id) is None:
        abort(404, message="Alien with id {} doesn't exist".format(id))


class AlienRest(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        abort_if_doesnt_exist(id)
        return Alien.query.get(id)

    def post(self, id):
        pass

    def put(self, id):
        pass


class AliensRest(Resource):
    @marshal_with(collection_fields)
    def get(self):
        result = Alien.query.all()
        return {"amount": len(result), "aliens": result}
