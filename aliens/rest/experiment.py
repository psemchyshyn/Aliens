from aliens.models.experiment import Experiment
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
from flask import request
import json
from flask import jsonify



resource_fields = {
    'id': fields.Integer,
    'human_id': fields.Integer,
    'spaceship_id': fields.Integer,
    'aliens': fields.List(fields.Nested({"id": fields.Integer})),
    'date': fields.DateTime(),
    '_links': {
        "self": fields.Url('experiment'), 
        "collection": fields.Url('experiments')
    }
}

collection_fields = {
    "amount": fields.Integer,
    "experiments": fields.List(fields.Nested(resource_fields))
}


parser = reqparse.RequestParser()



def abort_if_doesnt_exist(id):
    if Experiment.query.get(id) is None:
        abort(404, message="Experiment with id {} doesn't exist".format(id))


class ExperimentRest(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        abort_if_doesnt_exist(id)
        return Experiment.query.get(id)

    def post(self, id):
        pass

    def put(self, id):
        pass


class ExperimentsRest(Resource):
    @marshal_with(collection_fields)
    def get(self):
        print(parser.parse_args())
        result = Experiment.query.all()
        return {
            "amount": len(result),
            "experiments": result
        }
