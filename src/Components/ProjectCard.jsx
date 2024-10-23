import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import projectPic from '../assets/images/projectPic.webp';
import { Modal } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width="180" src={projectPic}  onClick={handleShow}/>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>

<Modal size='lg'show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
<Row>
  <Col md={6}>
  <img src={projectPic} width={"100%"}  alt=""/></Col>
  <Col md={6}>
  <h1>project Title</h1>
  <h2>
 Language:react
  </h2>
  <p><span>Overview:</span> rgergrb</p>
  </Col>
  
</Row>


<div classNme='mt-2'>
  <a href="" target='_blank' className =' me-3 btn text-dark'><i class="fa-brands fa-github fa-2x"></i></a>
  <a href="" target='_blank' className ='me-3 btn text-dark'><i class="fa-solid fa-link fa-2x"></i></a>


</div>


</Modal.Body>
</Modal>
</>
  );
}

export default ProjectCard;