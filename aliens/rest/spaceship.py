from aliens.models.objects import Spaceship
from aliens import db
from flask_restful import reqparse, abort, Resource, fields, marshal, marshal_with
from datetime import datetime
import json
from flask import jsonify



resource_fields = {
    'id': fields.Integer,
    'name':   fields.String,
    'experiments': fields.List(fields.Nested({"id": fields.Integer})),
    'escapes': fields.List(fields.Nested({"id": fields.Integer})),
    'abductions': fields.List(fields.Nested({"id": fields.Integer})),
    'transferred': fields.List(fields.Nested({"id": fields.Integer})),
    'accepted': fields.List(fields.Nested({"id": fields.Integer})),
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
parser.add_argument('target_id', type=int)
parser.add_argument('isAlien', type=bool)
parser.add_argument('start_date', type=lambda x: datetime.strptime(x, '%Y-%m-%d'), location="args")
parser.add_argument('end_date', type=lambda x: datetime.strptime(x, '%Y-%m-%d'), location="args")


def get_human_ships(h_id, start_date=None, end_date=None):
    result_ids = db.session.query(Spaceship.id).from_statement(db.text(
            '''
            SELECT spaceship.id FROM "Spaceship" as spaceship
                JOIN "Abduction" as abduction ON (abduction.spaceship_id = spaceship.id)
                WHERE (abduction.human_id =:id AND abduction.date BETWEEN '1999-03-02' AND '2021-10-12')     -- F,T
            UNION 
            SELECT spaceship.id FROM "Spaceship" as spaceship
                JOIN "Commutation" as commutation ON (commutation.to_id = spaceship.id)
                WHERE (commutation.human_id =:id AND commutation.date BETWEEN '1999-03-02' AND '2021-10-12')    -- F,T
            UNION
            SELECT spaceship.id FROM "Spaceship" as spaceship
                JOIN "Experiment" as experiment ON (experiment.spaceship_id = spaceship.id)
                WHERE (experiment.human_id =:id AND experiment.date BETWEEN '1999-03-02' AND '2021-10-12')    -- F,T
            '''
        )).params(id=h_id).all()
    return db.session.query(Spaceship).filter(Spaceship.id.in_(map(lambda x: x[0], result_ids))).all()



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
        args = parser.parse_args()
        if (args["target_id"]):
            if (args["isAlien"]):
                result = get_human_ships(args["target_id"])
            else: 
                result = get_human_ships(args["target_id"])
        else:
            result = Spaceship.query.all()
        return {"amount": len(result), "spaceships": result}
