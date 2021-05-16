import {Row, Col, Dropdown, Button} from "react-bootstrap"

const EventHandler = () => {
    return (
        <Row className="border-bottom py-2 align-items-center">
            <Col xs="6">
            <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    Choose
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Past</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>
            <Col xs="6" md={{span: "3", offset: "3"}}>
                <Button variant="danger mt-2">Create Team</Button>
            </Col>
        </Row>
    )
}

export default EventHandler;