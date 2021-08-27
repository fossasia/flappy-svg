import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Router, Route, Link } from "react-router";
import FooterComp from "../Footer/FooterComp";
export default function NavbarComponent() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">FOSSASIA | Flappy Bird </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/controls">Controls</Nav.Link>
              <NavDropdown title="Download" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/downloads">Desktop</NavDropdown.Item>
                <NavDropdown.Item href="/downloads">Mobile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Documentation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
