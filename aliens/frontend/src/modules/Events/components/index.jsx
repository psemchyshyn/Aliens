import {Container, Row, Col} from "react-bootstrap"
import Event from "./event"
import EventHandler from "./handler"


const Events = () => {
    return (
    <Container>
        <EventHandler></EventHandler>
        <Row>
            <Col xs={12} md={4} lg={3} className="p-3">
                <Event>
                </Event>
            </Col>
            <Col xs={12} md={4} lg={3} className="p-3">
                <Event>
                </Event>
            </Col>
            <Col xs={12} md={4} lg={3} className="p-3">
                <Event>
                </Event>
            </Col>
            <Col xs={12} md={4} lg={3} className="p-3">
                <Event>
                </Event>
            </Col>
            <Col xs={12} md={4} lg={3} className="p-3">
                <Event>
                </Event>
            </Col>
        </Row>

    </Container>
    )
}

export default Events;