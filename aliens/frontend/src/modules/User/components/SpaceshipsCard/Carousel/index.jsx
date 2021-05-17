import {Carousel, Row, ListGroup, ListGroupItem, Col, Card} from "react-bootstrap"



const SpaceshipCarousel = ({spaceships}) => {
    return (
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
    )
}

export default SpaceshipCarousel;