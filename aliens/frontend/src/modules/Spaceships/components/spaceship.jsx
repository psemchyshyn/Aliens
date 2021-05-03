import {Card, Col, Row, Button, OverlayTrigger, Popover} from "react-bootstrap"
import "./styles.css"

const Spaceship = () => {
    const popover1 = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Commute to</Popover.Title>
          <Popover.Content>
            <div className="to">Ship</div>
            <div className="to">Ship</div>
            <div className="to">Ship</div>
          </Popover.Content>
        </Popover>
      );

    const popover2 = popover1
    return (
        <Card border="primary">
        <Card.Header>
            Ship name
        </Card.Header>
        <Card.Body>
            <Row>
            <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
                <div className="onboard">
                    Oleg
                </div>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                <div className="onboard">
                    Sanya
                </div>
            </OverlayTrigger>
            </Row>
            <Row className="border-top align-items-center">
                <Col>
                    <Button variant="outline-danger mt-2">Escape</Button>
                </Col>
            </Row>    
        </Card.Body>   
    </Card>
    )
}

export default Spaceship;