import {Row, Col, Carousel, Card, ListGroup, ListGroupItem} from "react-bootstrap";

const SpaceshipsCard = () => {
    return (
    <div>
        <h5 className="text-center py-2 border-top border-bottom">Spaceships</h5>
        <Carousel>
            <Carousel.Item>
                <Row className="bg-dark">
                    <Col xs={{span: 8, offset: 2}}>
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title>Name</Card.Title>  
                            </Card.Body>   
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Abducted: <span>2</span></ListGroupItem>
                                <ListGroupItem>Experimented: <span>2</span></ListGroupItem>
                                <ListGroupItem>Moved from: <span>2</span></ListGroupItem>
                                <ListGroupItem>Moved to: <span>2</span></ListGroupItem>
                            </ListGroup>
                        </Card>
                        <div style={{height: '50px'}}></div>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row className="bg-dark">
                    <Col xs={{span: 8, offset: 2}}>
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title>Name</Card.Title>  
                            </Card.Body>   
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Abducted: <span>2</span></ListGroupItem>
                                <ListGroupItem>Experimented: <span>2</span></ListGroupItem>
                                <ListGroupItem>Moved from: <span>2</span></ListGroupItem>
                                <ListGroupItem>Moved to: <span>2</span></ListGroupItem>
                            </ListGroup>
                        </Card>
                        <div style={{height: '50px'}}></div>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row className="bg-dark">
                    <Col xs={{span: 8, offset: 2}}>
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title>Name</Card.Title>  
                            </Card.Body>   
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Abducted: <span>2</span></ListGroupItem>
                                <ListGroupItem>Experimented: <span>2</span></ListGroupItem>
                                <ListGroupItem>Moved from: <span>2</span></ListGroupItem>
                                <ListGroupItem>Moved to: <span>2</span></ListGroupItem>
                            </ListGroup>
                        </Card>
                        <div style={{height: '50px'}}></div>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
</div>
)}

export default SpaceshipsCard;