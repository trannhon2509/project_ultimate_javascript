import React from 'react';
import Header from '../components/Shared/Header'; // Import Header
import { Container } from 'react-bootstrap';

function BasicLayout({ children }) {
  return (
    <Container fluid className='p-0'>
      <Header /> {/* Add Header */}
      <div>{children}</div>
    </Container>
  );
}

export default BasicLayout;