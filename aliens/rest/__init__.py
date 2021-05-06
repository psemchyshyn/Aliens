from aliens.rest.spaceship import SpaceshipRest, SpaceshipsRest
from aliens.rest.experiment import ExperimentRest, ExperimentsRest
from aliens.rest.alien import AlienRest, AliensRest
from aliens.rest.human import HumanRest, HumansRest
from aliens.rest.excursion import ExcursionRest, ExcursionsRest
from aliens.rest.abdcution import AbductionRest, AbductionsRest
from aliens.rest.escape import EscapeRest, EscapesRest

from flask_restful import Api


api = Api(prefix='/api')
api.add_resource(ExperimentRest, "/experiment/<int:id>", endpoint="experiment")
api.add_resource(ExperimentsRest, "/experiments", endpoint="experiments")
api.add_resource(SpaceshipRest, "/spaceship/<int:id>", endpoint="spaceship")
api.add_resource(SpaceshipsRest, "/spaceships", endpoint="spaceships")
api.add_resource(AlienRest, "/alien/<int:id>", endpoint="alien")
api.add_resource(AliensRest, "/aliens", endpoint="aliens")
api.add_resource(HumanRest, "/human/<int:id>", endpoint="human")
api.add_resource(HumansRest, "/humans", endpoint="humans")
api.add_resource(ExcursionRest, "/excursion/<int:id>", endpoint="excursion")
api.add_resource(ExcursionsRest, "/excursions", endpoint="excursions")
api.add_resource(AbductionRest, "/abduction/<int:id>", endpoint="abduction")
api.add_resource(AbductionsRest, "/abductions", endpoint="abductions")
api.add_resource(EscapeRest, "/escape/<int:id>", endpoint="escape")
api.add_resource(EscapesRest, "/escapes", endpoint="escapes")