from aliens.models.objects import Human
from aliens import db
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
import json
from flask import jsonify



resource_fields = {
    'id': fields.Integer,
    'name':   fields.String,
    'experiments': fields.List(fields.Nested({"id": fields.Integer})),
    'abductions': fields.List(fields.Nested({"id": fields.Integer})),
    'excursions': fields.List(fields.Nested({"id": fields.Integer})),
    'commutations': fields.List(fields.Nested({"id": fields.Integer})),
    'escapes': fields.List(fields.Nested({"id": fields.Integer})),
    'killed': fields.List(fields.Nested({"id": fields.Integer})),
    '_links': {
        "self": fields.Url('human'), 
        "collection": fields.Url('humans')
    }
}

collection_fields = {
    "amount": fields.Integer,
    "humans": fields.List(fields.Nested(resource_fields))
}


parser = reqparse.RequestParser()
parser.add_argument('kills', type=int, location="args")
parser.add_argument('escapes', type=int, location="args")
parser.add_argument('excursions', type=int, location="args")



def abort_if_doesnt_exist(id):
    if Human.query.get(id) is None:
        abort(404, message="Human with id {} doesn't exist".format(id))


class HumanRest(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        abort_if_doesnt_exist(id)
        return Human.query.get(id)

    def post(self, id):
        pass

    def put(self, id):
        pass


class HumansRest(Resource):
    @marshal_with(collection_fields)
    def get(self):
        args = parser.parse_args()
        result = db.session.query(Human).all()
        if args['kills']:
            result = filter(lambda x: len(x.killed) >= args["kills"], result)
        if args['escapes']:
            result = filter(lambda x: len(x.escapes) >= args["escapes"], result)
        if args['excursions']:
            result = filter(lambda x: len(x.excursions) >= args["excursions"], result)        
        result = list(result)
        return {"amount": len(result), "humans": result}
