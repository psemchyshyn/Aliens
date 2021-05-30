from flask import Blueprint, request
from aliens.models.abduction import Abduction
from aliens.models.objects import Human, Alien, Spaceship
from aliens.models.cemetery import Cemetery
from aliens.models.experiment import Experiment
from aliens.models.excursion import Excursion, excursion_humans
from aliens import db
import json

queries = Blueprint("queries", __name__)

@queries.route('/1', methods=["POST"])
def query1():
    print(request.json)
    result_ids = db.session.query(Human.id).join(Human.abductions).filter(Abduction.alien_id == request.json['AId'], Abduction.date.between(request.json['F'], request.json['T'])).group_by(Human.id).having(db.func.count(Abduction.alien_id) > request.json['N']).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)


@queries.route('/2', methods=["POST"])
def query2():
    print(request.json)
    result_ids = db.session.query(Spaceship.id).from_statement(db.text(
            '''
            SELECT spaceship.id FROM "Spaceship" as spaceship
                JOIN "Abduction" as abduction ON (abduction.spaceship_id = spaceship.id)
                WHERE (abduction.human_id =:id AND abduction.date BETWEEN :F AND :T)     -- F,T
            UNION 
            SELECT spaceship.id FROM "Spaceship" as spaceship
                JOIN "Commutation" as commutation ON (commutation.to_id = spaceship.id)
                WHERE (commutation.human_id =:id AND commutation.date BETWEEN :F AND :T)    -- F,T
            UNION
            SELECT spaceship.id FROM "Spaceship" as spaceship
                JOIN "Experiment" as experiment ON (experiment.spaceship_id = spaceship.id)
                WHERE (experiment.human_id =:id AND experiment.date BETWEEN :F AND :T)    -- F,T
            '''
        )).params(id=request.json["HId"], F=request.json['F'], T=request.json['T']).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)


@queries.route('/3', methods=["POST"])
def query3():
    print(request.json)
    result_ids = db.session.query(Spaceship.id).from_statement(db.text(
            '''
            SELECT alien.id FROM "Alien" as alien
            JOIN "Abduction" as abduction ON (alien.id = abduction.alien_id)
            WHERE abduction.human_id =:id                                  -- H
            AND abduction.date BETWEEN :F AND :T
            GROUP BY alien.id
            HAVING COUNT(*) > :N
            '''
        )).params(id=request.json["HId"], F=request.json['F'], T=request.json['T'], N=request.json['N']).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)


@queries.route('/4', methods=["POST"])
def query4():
    print(request.json)
    result_ids = db.session.query(Cemetery.alien_id).from_statement(db.text(
            '''
            SELECT cemetery.alien_id
            FROM "Cemetery" as cemetery
            WHERE cemetery.killer_id =:id
            AND date BETWEEN :F AND :T
            '''
        )).params(id=request.json["HId"], F=request.json['F'], T=request.json['T']).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)


@queries.route('/5', methods=["POST"])
def query5():
    print(request.json)
    result_ids = db.session.query(Cemetery.alien_id).from_statement(db.text(
            '''
            SELECT t1.alien_id
            FROM "Cemetery" t1 
            LEFT JOIN "Abduction" t2 ON t2.human_id = t1.killer_id
            WHERE t1.alien_id = t2.alien_id AND t1.killer_id = :id 
            '''
        )).params(id=request.json["HId"]).all()
    print(result_ids)
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)


@queries.route('/6', methods=["POST"])
def query6():
    print(request.json)
    result_ids = db.session.query(Alien.id).from_statement(db.text(
            '''
            SELECT alien.id FROM "Alien" as alien
            JOIN "Abduction" as abduction ON (abduction.alien_id = alien.id)
            WHERE abduction.date BETWEEN :F AND :T
            GROUP BY alien.id
            HAVING COUNT(abduction.alien_id) >= :N;
            '''
        )).params(N=request.json["N"], F=request.json["F"], T=request.json["T"]).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)



@queries.route('/7', methods=["POST"])
def query7():
    print(request.json)
    result_ids = db.session.query(Human.id).from_statement(db.text(
            '''
            SELECT human.id FROM "Human" as human
            JOIN "Abduction" as abduction ON (abduction.human_id = human.id)
            WHERE abduction.date BETWEEN :F AND :T
            GROUP BY human.id
            HAVING COUNT(abduction.human_id) >= :N;
            '''
        )).params(N=request.json["N"], F=request.json["F"], T=request.json["T"]).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)


@queries.route('/8', methods=["POST"])
def query8():
    print(request.json)
    q = db.text(
            '''
            SELECT ExcursionHuman.excursion_id from "ExcursionHuman" as ExcursionHuman
            JOIN "Excursion" as Excursion ON (ExcursionHuman.excursion_id = Excursion.id)
            WHERE ExcursionHuman.human_id = :H AND                     
                Excursion.alien_id = :A AND                             
                Excursion.date BETWEEN :F AND :T 
            UNION
            SELECT Experiment.id FROM "Experiment" as Experiment
            JOIN "ExperimentAliens" as ExperimentAliens ON (Experiment.id = ExperimentAliens.experiment_id)
            WHERE Experiment.human_id = :H AND                          
                ExperimentAliens.alien_id = :A AND                       
                Experiment.date BETWEEN :F AND :T 
            '''
        )
    result_ids = db.engine.execute(q, {"A": request.json["AId"], "H": request.json["HId"], "F": request.json["F"], "T": request.json["T"]}).all()
    print(result_ids)
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)


@queries.route('/9', methods=["POST"])
def query9():
    print(request.json)
    q = db.text(
            '''
            SELECT COUNT(DISTINCT excursion.id) FROM "Excursion" as excursion
            JOIN "ExcursionHuman" as excursionhuman ON (excursion.id=excursionhuman.excursion_id)
            WHERE excursion.date BETWEEN :F AND :T
            GROUP BY excursion.alien_id
            HAVING COUNT(excursionhuman.excursion_id) > :N                 
            AND excursion.alien_id = :A                                    
            '''
        )
    result_ids = db.engine.execute(q, {"A": request.json["AId"], "N": request.json["N"], "F": request.json["F"], "T": request.json["T"]}).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)

@queries.route('/10', methods=["POST"])
def query10():
    print(request.json)
    q = db.text(
            '''
            SELECT COUNT(DISTINCT experiment.id) FROM "Experiment" as experiment
            JOIN "ExperimentAliens" as experimentaliens ON (experiment.id=experimentaliens.experiment_id)
            WHERE experiment.date BETWEEN :F AND :T
            GROUP BY experiment.human_id
            HAVING COUNT(experimentaliens.experiment_id) > :N              
            AND experiment.human_id = :H                                                                      
            '''
        )
    result_ids = db.engine.execute(q, {"H": request.json["HId"], "N": request.json["N"], "F": request.json["F"], "T": request.json["T"]}).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)


@queries.route('/11', methods=["POST"])
def query11():
    print(request.json)
    q = db.text(
            '''
            SELECT to_char(date, 'Mon') as month, count(*) as number
            FROM "Abduction" as abduction
            GROUP BY month;                                                                    
            '''
        )
    result_ids = db.engine.execute(q).all()
    result_ids = [list(el) for el in result_ids]
    return json.dumps(result_ids)


@queries.route('/12', methods=["POST"])
def query12():
    print(request.json)
    result_ids = db.session.query(Experiment.spaceship_id).from_statement(db.text(
            '''
            SELECT Experiment.spaceship_id FROM "ExperimentAliens" as ExperimentAliens
            JOIN "Experiment" as Experiment ON ExperimentAliens.experiment_id = Experiment.id
            WHERE  ExperimentAliens.alien_id = :A and 
                Experiment.Date BETWEEN :F AND :T
            GROUP BY Experiment.spaceship_id
            ORDER BY COUNT(Experiment.id) DESC                                 
            '''
        )).params(A=request.json["AId"], F=request.json["F"], T=request.json["T"]).all()
    result_ids = [el for el in map(lambda x: x[0], result_ids)]
    return json.dumps(result_ids)
