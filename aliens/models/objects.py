from aliens import db
from datetime import datetime

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
