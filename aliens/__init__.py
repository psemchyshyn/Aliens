import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


db = SQLAlchemy()
ma = Marshmallow()


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        SQLALCHEMY_DATABASE_URI="postgresql://postgres:postgres@localhost:5432/Aliens",
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
        DEBUG=True
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)


    db.init_app(app)
    ma.init_app(app)
    from .rest import api
    api.init_app(app)
    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    from aliens.models.abduction import Abduction
    from aliens.models.objects import Alien, Human, Spaceship
    from aliens.models.cemetery import Cemetery
    from aliens.models.commutation import Commutation
    from aliens.models.escape import Escape
    from aliens.models.experiment import Experiment
    from aliens.models.excursion import Excursion

    # a simple page that says hello
    @app.route('/')
    def hello():
        return {"name": "df"}
    return app
