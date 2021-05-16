import {Form, Button, Container} from "react-bootstrap"

const RegisterForm = () => {
    return (
        <Container>
            <Form className="my-4">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Your name" />
                    <Form.Text className="text-muted">
                        Think of a cool name
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicImageUrl">
                    <Form.Label>Your Image URL</Form.Label>
                    <Form.Control placeholder="https:://"/>
                </Form.Group>

                <Form.Group controlId="RadioBtn">
                    <Form.Check inline name="role" type="radio" label="Alien" />
                    <Form.Check inline name="role" type="radio" label="Human" />
                    <Form.Text className="text-muted">
                        Who are you going to be?
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default RegisterForm;