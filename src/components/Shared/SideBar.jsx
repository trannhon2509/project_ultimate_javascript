import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '../../routes/RoutePath';

const SideBar = () => {
  return (
    <Nav defaultActiveKey={PUBLIC_ROUTES.HOME} className="flex-column">
      <Nav.Link as={Link} to={PUBLIC_ROUTES.HOME}>Home</Nav.Link>
      <Nav.Link as={Link} to={PRIVATE_ROUTES.USER.DASHBOARD}>Dashboard</Nav.Link>
      <Nav.Link as={Link} to={PRIVATE_ROUTES.USER.SETTINGS}>Settings</Nav.Link>
      <Nav.Link as={Link} to={PRIVATE_ROUTES.USER.PROFILE}>Profile</Nav.Link>
    </Nav>
  );
};

export default SideBar;
