import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";

export default function NavMenu() {

    return(
        <Navbar>
            <Container>
                <NavbarBrand href='/'>Home</NavbarBrand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/page1">Page1</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/page2">Page2</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}