from aliens import db
from datetime import datetime


experiment_aliens = db.Table('ExperimentAliens',
    db.Column('experiment_id', db.Integer, db.ForeignKey('Experiment.id'), primary_key=True),
    db.Column('alien_id', db.Integer, db.ForeignKey('Alien.id'), primary_key=True)
)

class Experiment(db.Model):
    __tablename__ = "Experiment"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    human_id = db.Column(db.Integer, db.ForeignKey("Human.id"), nullable=False)
    spaceship_id = db.Column(db.Integer, db.ForeignKey("Spaceship.id"), nullable=False)
    human = db.relationship("Human", backref=db.backref("experiments", lazy=True))
    aliens = db.relationship("Alien", secondary=experiment_aliens, backref=db.backref("experiments", lazy=True))
    spaceship = db.relationship("Spaceship", backref=db.backref("experiments", lazy=True))

    def __init__(self, human, alien, spaceship):
        self.human = human
        self.alien = alien
        self.spaceship = spaceship
