import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#6BC4C4', color: 'white', padding: '20px 0', marginBottom: '0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Project Fair</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              velit placeat quasi animi maxime natus vero aspernatur blanditiis
              magni, molestias similique? Nescunt, aspernatur?
            </p>
          </Col>
          <Col md={2}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li>React</li>
              <li>React Bootstrap</li>
              <li>Bootswatch</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <Form inline>
              <Form.Control
                type="email"
                placeholder="Enter your Email ID"
                className="mr-sm-2 mb-2"
              />
              <Button variant="warning" className="mb-2">Send</Button>
            </Form>
            <div>
              {/* Social media icons can be placed here */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>Copyright © 2024 Project Fair. Built with React.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
