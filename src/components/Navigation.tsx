import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navigation = () => (
  <Router>
    
  <Navbar bg="dark" expand="lg" variant="dark">
    <Link to="/">
      <Navbar.Brand>Shop.com</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/products">Products</Nav.Link>
      </Nav>
      <Nav>
        <NavDropdown title="Account" id="collapsible-nav-dropdown">
          <Link to="/profile">
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </Link>
          <Link to="/wishlist">
            <NavDropdown.Item>Wishlist</NavDropdown.Item>
          </Link>
        </NavDropdown>
        <Link to="/checkout">
          <Nav.Link>Checkout</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </Router>
)

export default Navigation
