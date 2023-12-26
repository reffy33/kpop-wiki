import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Header: React.FC = () => {
  return(
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">KPOP-WIKI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/boy-groups">Boy Groups</Nav.Link>
            <Nav.Link href="/girl-groups">Girl Groups</Nav.Link>
            <Nav.Link href="/co-ed-groups">Co-ed Groups</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
