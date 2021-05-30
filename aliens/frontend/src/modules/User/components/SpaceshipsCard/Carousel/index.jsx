import {Carousel, Row, ListGroup, ListGroupItem, Col, Card} from "react-bootstrap"



const SpaceshipCarousel = ({spaceships}) => {
    return (
        <Carousel>
            {   
                spaceships && spaceships.map(spaceship => (
                    <Carousel.Item>
                        <Row className="bg-dark">
                            <Col xs={{span: 8, offset: 2}}>
                                <Card className="mt-2">
                                    <Card.Body>
                                        <Card.Title>{spaceship.name}</Card.Title>  
                                    </Card.Body>   
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Abducted: <span>{spaceship.abductions.length}</span></ListGroupItem>
                                        <ListGroupItem>Experimented: <span>{spaceship.experiments.length}</span></ListGroupItem>
                                        <ListGroupItem>Transfers from: <span>{spaceship.transferred.length}</span></ListGroupItem>
                                        <ListGroupItem>Transfers to: <span>{spaceship.accepted.length}</span></ListGroupItem>
                                        <ListGroupItem>Escapes: <span>{spaceship.escapes.length}</span></ListGroupItem>
                                    </ListGroup>
                                </Card>
                                <div style={{height: '50px'}}></div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))
            }

        </Carousel>
    )
}

export default SpaceshipCarousel;