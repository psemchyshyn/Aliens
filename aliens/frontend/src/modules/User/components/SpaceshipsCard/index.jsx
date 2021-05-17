import {Row, Col, Carousel, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {useEffect, useState} from "react"
import {getSpaceship} from "../../../../services/spaceship"
import SpaceshipCarousel from "./Carousel/index"



const SpaceshipsCard = ({spaceshipIds}) => {
    const [spaceships, setSpaceships] = useState([])

    useEffect(() => {
        Promise.all(spaceshipIds).then(spaceships => {
            console.log(spaceshipIds)
            setSpaceships(spaceships)
        })
    }, [])

    return (
    <div>
        <h5 className="text-center py-2 border-top border-bottom">Spaceships</h5>
        <SpaceshipCarousel spaceships={spaceships}></SpaceshipCarousel>
    </div>
)}

export default SpaceshipsCard;