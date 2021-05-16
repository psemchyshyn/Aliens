import Spaceship from "./spaceship"
import {Container, Row, Col} from "react-bootstrap"

const SpaceShips = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4} lg={3} className="p-3">
                    <Spaceship>
                    </Spaceship>
                </Col>
                <Col xs={12} md={4} lg={3} className="p-3">
                    <Spaceship>
                    </Spaceship>
                </Col>
                <Col xs={12} md={4} lg={3} className="p-3">
                    <Spaceship>
                    </Spaceship>
                </Col>
                <Col xs={12} md={4} lg={3} className="p-3">
                    <Spaceship>
                    </Spaceship>
                </Col>
                <Col xs={12} md={4} lg={3} className="p-3">
                    <Spaceship>
                    </Spaceship>
                </Col>
            </Row>
        </Container>
    )
}


export default SpaceShips;