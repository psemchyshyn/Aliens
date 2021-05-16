import {Card, ListGroupItem, Row, Col, Container, Accordion, Badge} from "react-bootstrap";
import SpaceshipsCard from "../SpaceshipsCard/index";
import PropTypes from 'prop-types';

const UserCard = () => {
    const badge = {
        position: "absolute",
        top: "20px",
        left: "-20px",
        height: "50px",
        width: "50px"
    }
    return (
        <Container className="my-4">
            <Card border="danger" className="mx-auto" style={{width: "80%"}}>
                <Row className="no-gutters position-relative">
                    <Col sm={12} md={6}>
                        <div style={badge}>
                            <Badge variant="danger">Human</Badge>
                        </div>
                        <Card.Img src="https://nogivruki.ua/wp-content/uploads/2018/08/default-user-image.png" alt="imageplaceholder"/>
                    </Col>
                    <Col sm={12} md={6} className="px-2">
                        <Card.Title className="border-bottom">
                            <Row className="py-2 align-items-center">
                                <Col xs={9}>
                                    <div id="user-name">Name</div>
                                </Col>
                                <Col xs={3} >
                                    <span id="user-rating">20</span>
                                    <span><i class="fas fa-star"></i></span>
                                </Col>
                            </Row>
                        </Card.Title>
                        <Accordion defaultActiveKey="0">
                                <Accordion.Toggle as={Card.Title} eventKey="0">
                                    <Card.Body>
                                        Escapes
                                    </Card.Body>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>User escapes</div>
                                </Accordion.Collapse>
                        </Accordion>
                        <SpaceshipsCard></SpaceshipsCard>
                    </Col>
                </Row>
            </Card>
        </Container>

)
}

export default UserCard;

