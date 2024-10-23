import React from 'react';
import { Navbar, Nav, Button, Dropdown, Container } from 'react-bootstrap';

const Header= () => {
  return (
    <Navbar style={{ backgroundColor: '#6BC4C4' }} expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: 'bold', color: 'white' }}>
          <i className="bi bi-list" /> Project-Fair
        </Navbar.Brand>
        <Nav className="ml-auto">
          <span className="navbar-text" style={{ fontSize: '1.5rem', marginRight: '20px' }}>
            Welcome <span style={{ color: '#F0C529', fontWeight: 'bold' }}>Luke</span>
          </span>
         

          
          <Button variant="outline-light" style={{ marginLeft: '20px' }}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;