from aliens import db
import datetime

class Alien(db.Model):
    __tablename__ = "Alien"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def __init__(self, name):
        self.name = name


class Human(db.Model):
    __tablename__ = "Human"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def __init__(self, name):
        self.name = name

class Spaceship(db.Model):
    __tablename__ = "Spaceship"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def __init__(self, name):
        self.name = name

class Abduction(db.Model):
    __tablename__ = "Abduction"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    human_id = db.Column(db.Integer, db.ForeignKey("Human.id"), nullable=False)
    alien_id = db.Column(db.Integer, db.ForeignKey("Alien.id"), nullable=False)
    spaceship_id = db.Column(db.Integer, db.ForeignKey("Spaceship.id"), nullable=False)
    human = db.relationship("Human", backref=db.backref("abductions", lazy=True))
    alien = db.relationship("Alien", backref=db.backref("abductions", lazy=True))
    spaceship = db.relationship("Spaceship", backref=db.backref("abductions", lazy=True))

    def __init__(self, human, alien, spaceship):
        self.human = human
        self.alien = alien
        self.spaceship = spaceship

