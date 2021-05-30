import Spaceship from "../ship/spaceship"
import {Container, Row, Col} from "react-bootstrap"
import {useState, useEffect} from "react"
import { getSpaceships } from "../../../../services/spaceship"

const SpaceShips = () => {
    let [spaceships, setSpaceships] = useState([])

    useEffect(() => {
        getSpaceships().then(spaceshipss => {
            setSpaceships(spaceshipss["spaceships"])
        })        
    }, [])
    return (
        <Container>
            <Row>
                {   
                    spaceships.map(spaceship => (
                        <Col xs={12} md={4} lg={3} className="p-3">
                            <Spaceship name={spaceship.name} exps={spaceship.experiments.map(exp => exp.id)} ships={spaceships}>
                            </Spaceship>
                        </Col>   
                    ))
   
                }

            </Row>
        </Container>
    )
}


export default SpaceShips;