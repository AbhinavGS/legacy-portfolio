import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3 navbar-main">
        <Container fluid>
          <Navbar.Brand className="navbar-brand">
            <img src="logo192.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$"lg"`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$"lg"`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$"lg"`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"xl"`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 navbar-links">
                <Nav.Link className="nav-link" href="#action1">
                  HOME
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  ABOUT
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  WORK
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  SKILLS
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  CONTACT
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
