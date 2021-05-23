import {Row, Col, Carousel, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {useEffect, useState} from "react"
import {getSpaceships} from "../../../../services/spaceship"
import SpaceshipCarousel from "./Carousel/index"



const SpaceshipsCard = ({user}) => {
    const [spaceships, setSpaceships] = useState([])

    useEffect(() => {
        getSpaceships(user.id, user.isAlien).then(spaceships => {
            setSpaceships(spaceships["spaceships"])
        })
    }, [user])

    return (
    <div>
        <h5 className="text-center py-2 border-top border-bottom">Spaceships</h5>
        <SpaceshipCarousel spaceships={spaceships}></SpaceshipCarousel>
    </div>
)}

export default SpaceshipsCard;