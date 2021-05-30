from aliens.models.objects import Alien, Human
from aliens.models.abduction import Abduction
from aliens import db
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
from datetime import datetime
import json
from flask import jsonify



resource_fields = {
    'id': fields.Integer,
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
parser.add_argument('abductions', type=int, location="args")
parser.add_argument('commutations', type=int, location="args")
parser.add_argument('experiments', type=int, location="args")


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
        args = parser.parse_args()
        result = db.session.query(Alien).all()
        if args['abductions']:
            result = filter(lambda x: len(x.abductions) >= args["abductions"], result)
        if args['commutations']:
            result = filter(lambda x: len(x.commutations) >= args["commutations"], result)
        if args['experiments']:
            result = filter(lambda x: len(x.excursions) >= args["experiments"], result)        
        result = list(result)
        return {"amount": len(result), "aliens": result}
