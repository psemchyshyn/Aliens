from aliens import db
from datetime import datetime


class Commutation(db.Model):
    __tablename__ = "Commutation"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    human_id = db.Column(db.Integer, db.ForeignKey("Human.id"), nullable=False)
    alien_id = db.Column(db.Integer, db.ForeignKey("Alien.id"), nullable=False)
    from_id = db.Column(db.Integer, db.ForeignKey("Spaceship.id"), nullable=False)
    to_id = db.Column(db.Integer, db.ForeignKey("Spaceship.id"), nullable=False)
    from_ship = db.relationship("Spaceship", backref=db.backref("transferred", lazy=True), foreign_keys=[from_id])
    to_ship = db.relationship("Spaceship", backref=db.backref("accepted", lazy=True), foreign_keys=[to_id])
    human = db.relationship("Human", backref=db.backref("commutations", lazy=True))
    alien = db.relationship("Alien", backref=db.backref("commutations", lazy=True))

    def __init__(self, human, alien, frm, to):
        self.human = human
        self.alien = alien
        self.frm = frm
        self.to = to
