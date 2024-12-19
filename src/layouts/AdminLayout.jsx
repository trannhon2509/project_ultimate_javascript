import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../components/Shared/SideBar';
import Header from '../components/Shared/Header';

const AdminLayout = ({ children }) => {
  return (
    <Container fluid className='p-0'>
        <Header />
      <Row>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={10}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
