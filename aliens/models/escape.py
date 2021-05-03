from aliens import db
from datetime import datetime


class Escape(db.Model):
    __tablename__ = "Escape"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    human_id = db.Column(db.Integer, db.ForeignKey("Human.id"), nullable=False)
    spaceship_id = db.Column(db.Integer, db.ForeignKey("Spaceship.id"), nullable=False)
    human = db.relationship("Human", backref=db.backref("escapes", lazy=True))
    spaceship = db.relationship("Spaceship", backref=db.backref("escapes", lazy=True))

    def __init__(self, human, spaceship):
        self.human = human
        self.spaceship = spaceship
