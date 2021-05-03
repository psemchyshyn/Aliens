from aliens import db
from datetime import datetime


excursion_humans = db.Table('ExcursionHuman',
    db.Column('excursion_id', db.Integer, db.ForeignKey('Excursion.id'), primary_key=True),
    db.Column('human_id', db.Integer, db.ForeignKey('Human.id'), primary_key=True)
)

class Excursion(db.Model):
    __tablename__ = "Excursion"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    alien_id = db.Column(db.Integer, db.ForeignKey("Alien.id"), nullable=False)
    guide = db.relationship("Alien", backref=db.backref("excursions", lazy=True))
    participants = db.relationship("Human", secondary=excursion_humans, backref=db.backref("excursions_taken", lazy=True))

    def __init__(self, human, alien, spaceship):
        self.human = human
        self.alien = alien
        self.spaceship = spaceship
