import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Header: React.FC = () => {
  return(
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">KPOP-WIKI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Agencies</Nav.Link>
            <Nav.Link href="#home">Boy Groups</Nav.Link>
            <Nav.Link href="#home">Girl Groups</Nav.Link>
            <Nav.Link href="#home">Co-ed Groups</Nav.Link>
            <Nav.Link href="#home">Soloists</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
