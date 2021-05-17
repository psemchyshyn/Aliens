import {Form, Dropdown} from "react-bootstrap"

const FilterEnemies = () => {
    return (
        <Form>
            <Form.Group>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        Choose
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Dead</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Alive</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
            <Form.Group controlId="AbductionsRange">
                <Form.Label>Abductions made</Form.Label>
                <Form.Control min="0" max="5" defaultValue="3" type="range" />
            </Form.Group>
            <Form.Group controlId="A    Range">
                <Form.Label>Commutations performed</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
            <Form.Group controlId="AbductionsRange">
                <Form.Label>Experiments conducted</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
            <Form.Group controlId="AbductionsRange">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
    </Form>
    )
}


export default FilterEnemies;