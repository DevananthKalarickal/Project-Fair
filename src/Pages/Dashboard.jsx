import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Profile from '../Components/Profile';
import MyProjects from '../Components/MyProjects';


function Dashboard() {
  return (
    <Container className="mt-4 dashboard-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Row className="dashboard-row" style={{ flexGrow: 1 }}>
        {/* My projects section */}
        <Col sm={12} md={8}>
          <h2>Welcome <span className='text-warning fw-bolder'>User</span></h2>
          <MyProjects />
        </Col>

        {/* Profile section */}
        <Col sm={12} md={4}>
          <Profile />
        </Col>
      </Row>
     
    
    </Container>
  );
}

export default Dashboard;
