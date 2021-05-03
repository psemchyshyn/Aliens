from aliens import db
from datetime import datetime


class Cemetery(db.Model):
    __tablename__ = "Cemetery"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    killer_id = db.Column(db.Integer, db.ForeignKey("Human.id"), nullable=False)
    alien_id = db.Column(db.Integer, db.ForeignKey("Alien.id"), nullable=False)
    killer = db.relationship("Human", backref=db.backref("killed", lazy=True))
    alien = db.relationship("Alien", backref=db.backref("cemetery", lazy=True, uselist=False))

    def __init__(self, human, alien):
        self.human = human
        self.alien = alien
