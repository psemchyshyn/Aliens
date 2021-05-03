import {Card, Row, Col, Button} from "react-bootstrap";
import "./styles.css"

const Event = () => {
    
    return (
        <Card border="dark">
            <Card.Header>
                Scheduled on: <span className="event-scheduled">27.05.2021</span>
            </Card.Header>
            <Card.Body>
                <p className="border-bottom font-weight-bold">Ship: <span className="font-weight-normal">Name of the ship</span></p>
                <p className="border-bottom font-weight-bold">Guide: <span className="font-weight-normal">Name of the alien</span></p>
                <p className="font-weight-bold">Interested: </p>
                <Row>
                    <div className="interested">
                        Oleg
                    </div>
                    <div className="interested">
                        Sanya
                    </div>
                </Row>
                <Row className="border-top align-items-center">
                    <Col md="8">Wanna join?</Col>
                    <Col md="4">
                        <Button variant="outline-danger mt-2">Join</Button>
                    </Col>
                </Row>    
            </Card.Body>   
        </Card>
    )
}


export default Event;