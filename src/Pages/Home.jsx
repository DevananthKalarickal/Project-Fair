import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import titleImage from "../assets/images/alaminxyz.gif";
import ProjectCard from "../Components/ProjectCard";

function Home() {
  return (
    <>
    <div style={{ width: "100%", height: "100vh" }} className="container-fluid rounded bg-info">
      <Row className="d-flex align-items-center p-5">
        <Col sm={12} md={6} className='mt-5'>
          <h1 style={{ fontSize: '80px' }} className="fw-bold text-light">
            <i className='fa-solid fa-list-check me-2'></i>Welcome to Project Fair
          </h1>
          <p className="text-light">
            Ipsum dolor sit amet, consectetur adipisicing elit. Quider minima nulla doloras quaet Negos at beatas tenetur enim. Quia aniri sit quis praesentium ab eligendi assumenda. Saepe aliquam ratione delectus!
          </p>
          <Link to="/login" className="btn btn-warning">Start to Explore</Link>
        </Col>
        <Col sm={12} md={6} className='mt-5'>
          <img src={titleImage} alt="Title Animation" width={"500px"} />
        </Col>
      </Row>
</div>
      <div className="all-projects mt-3">
        <h1 className="text-info text-center fs-1">Explore Your Projects</h1>

        {/* Using <marquee> as requested */}
        <marquee scrollAmount={20}>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
          </Row>
        </marquee>

        <div className="d-flex justify-content-center text-dark mt-5">
          <p className="fs-3">View more Projects</p>
        </div>
    
    </div>
    </>
  );
}

export default Home;
