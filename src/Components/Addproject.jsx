import React, { useState } from 'react';
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='me-3' variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <label>
                <input style={{ display: "none" }} type="file" />
                <img
                  height="350px"
                  width="100%"
                  src="https://icon-library.com/images/photo-placeholder-icon/photo-placeholder-icon-14.jpg"
                  alt="Project"
                />
              </label>
            </div>

            <div className="col-6">
              <Form>
                <FloatingLabel controlId="floatingInput" label="Project Title" className="mb-3">
                  <Form.Control type="text" placeholder="Project Title" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Overview" className="mb-3">
                  <Form.Control type="text" placeholder="Overview" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="GitHub" className="mb-3">
                  <Form.Control type="text" placeholder="GitHub" />
                </FloatingLabel>
              </Form>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;