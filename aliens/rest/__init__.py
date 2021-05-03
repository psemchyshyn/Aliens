from aliens.rest.spaceship import SpaceshipRest, SpaceshipsRest
from aliens.rest.experiment import ExperimentRest, ExperimentsRest
from flask_restful import Api


api = Api(prefix='/api')
api.add_resource(ExperimentRest, "/experiment/<int:id>", endpoint="experiment")
api.add_resource(ExperimentsRest, "/experiments", endpoint="experiments")
api.add_resource(SpaceshipRest, "/spaceship/<int:id>", endpoint="spaceship")
api.add_resource(SpaceshipsRest, "/spaceships", endpoint="spaceships")
