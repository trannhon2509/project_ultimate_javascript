import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../routes/RoutePath';
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">BrandName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={PUBLIC_ROUTES.HOME}>Home</Nav.Link>
            <Nav.Link as={Link} to={PRIVATE_ROUTES.USER.DASHBOARD}>User</Nav.Link>
            <Nav.Link as={Link} to={PRIVATE_ROUTES.ADMIN.DASHBOARD}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;