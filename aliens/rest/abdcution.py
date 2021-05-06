from aliens.models.abduction import Abduction
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
from flask import request
import json
from flask import jsonify



resource_fields = {
    'id': fields.Integer,
    'human_id': fields.Integer,
    'alien_id': fields.Integer,
    'date': fields.DateTime(),
    '_links': {
        "self": fields.Url('abduction'), 
        "collection": fields.Url('abductions')
    }
}

collection_fields = {
    "amount": fields.Integer,
    "abductions": fields.List(fields.Nested(resource_fields))
}


parser = reqparse.RequestParser()



def abort_if_doesnt_exist(id):
    if Abduction.query.get(id) is None:
        abort(404, message="Abdcution with id {} doesn't exist".format(id))


class AbductionRest(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        abort_if_doesnt_exist(id)
        return Abduction.query.get(id)

    def post(self, id):
        pass

    def put(self, id):
        pass


class AbductionsRest(Resource):
    @marshal_with(collection_fields)
    def get(self):
        print(parser.parse_args())
        result = Abduction.query.all()
        return {
            "amount": len(result),
            "abductions": result
        }
