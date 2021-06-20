import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    {/* <Link href="/" passHref> */}
      <Navbar.Brand>Shop.com</Navbar.Brand>
    {/* </Link> */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* <Nav.Link href="/products">Products</Nav.Link> */}
      </Nav>
      <Nav>
        <NavDropdown title="Account" id="collapsible-nav-dropdown">
          {/* <Link href="/profile" passHref> */}
            <NavDropdown.Item>Profile</NavDropdown.Item>
          {/* </Link> */}
          {/* <Link href="/wishlist" passHref> */}
            <NavDropdown.Item>Wishlist</NavDropdown.Item>
          {/* </Link> */}
        </NavDropdown>
        {/* <Link href="/checkout" passHref> */}
          <Nav.Link>Checkout</Nav.Link>
        {/* </Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
