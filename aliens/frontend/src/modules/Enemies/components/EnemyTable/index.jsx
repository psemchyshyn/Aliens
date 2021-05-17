import FilterEnemies from "../FilterEnemy/filter"
import {Table, Container, Row, Col, Button} from "react-bootstrap"

const Enemies = () => {
    return (
        <Container>
            <Row className="my-4">
                <Col sm={12} md="4">
                    <FilterEnemies></FilterEnemies>
                </Col>
                <Col sm={12} md="8">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Commutations</th>
                                <th>Abductions</th>
                                <th>Experiments</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from({length: 12}).map((_, ind) => (
                                    <tr className="">
                                        <td>{ind}</td>
                                        <td>Mark</td>
                                        <td>12</td>
                                        <td>10</td>
                                        <td>1</td>
                                        <td>23</td>
                                        <td><Button variant="danger">Kill</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}



export default Enemies;