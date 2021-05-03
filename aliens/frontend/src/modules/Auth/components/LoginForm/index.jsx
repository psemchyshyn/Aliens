import {Modal, Form, Button} from "react-bootstrap";
// import LogTrigger from "../LogTrigger/index"
import {useState} from "react"

const LoginForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow}>Login</Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Please, Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="input" placeholder="Your name"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Login
                </Button>
            </Modal.Footer>
        </Modal>
        </>

      
    )
}

export default LoginForm;