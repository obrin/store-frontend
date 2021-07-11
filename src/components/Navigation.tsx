import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Link to="/">
        <Navbar.Brand>Shop.com</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavDropdown title="Account" id="collapsible-nav-dropdown">
            <Nav.Item>
              <Link to="/profile">Profile</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/wishlist">Wishlist</Link>
            </Nav.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
