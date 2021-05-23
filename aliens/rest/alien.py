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
parser.add_argument('target_id', type=int, location="args")
parser.add_argument('start_date', type=lambda x: datetime.strptime(x, '%Y-%m-%d'), location="args")
parser.add_argument('end_date', type=lambda x: datetime.strptime(x, '%Y-%m-%d'), location="args")
parser.add_argument('abductions', type=int, location="args")



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
        print(args)
        # result = Alien.query.filter(args["target_id"] in Alien.abductions)
        result = db.session.query(Human.name).from_statement(db.text(
            '''
SELECT Human.name from "Abduction" as Abduction
JOIN "Human" as Human ON (Human.id = Abduction.human_id)
WHERE Abduction.alien_id = 9 AND                                    -- A
    Abduction.date BETWEEN '2001-10-10' AND '2009-01-01'   -- F, T
GROUP BY Abduction.human_id, Human.name
            '''
        )).all()
        result_ids = db.session.query(Human.id).join(Human.abductions).filter(Abduction.alien_id == 9, Abduction.date.between('2001-10-10', '2009-01-01')).group_by(Human.id).all()
        result = db.session.query(Human).filter(Human.id.in_(map(lambda x: x[0], result_ids))).all()
        print(result)
        return {"amount": len(result), "aliens": result}
