import {Navbar, Nav, FormControl, Form} from "react-bootstrap";
import {useSelector} from "react-redux"
import LoginForm from "../../../Auth/components/LoginForm/index"



const Header = () => {
  const user = useSelector(state => state.user)
  console.log("Here is the authorised user", user)
    const defineHome = () => {
      if (user) {
          if (user.isAlien) {
            return `/users/${user.id}/?type='alien'`
          } else {
            return `/users/${user.id}/?type='human'`
          }
      } else {
        return "/users/1/?type='human'"
      }
    }

    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href={defineHome()}>Home</Nav.Link>
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