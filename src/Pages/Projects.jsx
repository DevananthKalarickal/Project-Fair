import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Assuming you're using Bootstrapd
import ProjectCard from '../Components/ProjectCard';

function Projects() {
  return (
    <>
    

      <div className='projects mt-5'>
        <h1 className="text-center mb-5">All Projects</h1>

        <div className="d-flex justify-content-center align-items-center">
          <div className='d-flex border w-50 rounded mb-3'>
            <input 
              type="text" 
              className='form-control' 
              placeholder='Search by technologies' 
            />
            <i 
              style={{ marginLeft: '-50px' }} 
              className="fa-solid fa-magnifying-glass fa-rotate-90"
            ></i>
          </div>
        </div>

        <Row className="container-fluid mt-5">
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
          {/* Repeat the <Col> and <ProjectCard> for each project if needed */}
        </Row>
      </div>
    </>
  );
}

export default Projects;