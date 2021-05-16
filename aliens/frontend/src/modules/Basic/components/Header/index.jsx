import {Navbar, Nav, FormControl, Form} from "react-bootstrap";
import LoginForm from "../../../Auth/components/LoginForm/index"

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/spaceships">Spaceships</Nav.Link>
          <Nav.Link href="/enemies">Enemies</Nav.Link>
          <Nav.Link href="/excursions">Excursions</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <LoginForm></LoginForm>
        </Form>
      </Navbar>
    )
}


export default Header;