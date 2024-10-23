import React from 'react';
import AddProject from '../Components/Addproject';

function MyProjects() {
  return (
    <>
      <div className="card shadow mt-5 mb-5">
        <div className="d-flex">
          <h2>My Projects</h2>
        </div>

        <div className="ms-auto">
          <AddProject />
        </div>

        <div className="mt-4 border container-fluid">
          <h2>Project Title</h2>

          <div className="d-flex ms-auto">
            <a className='me-3 btn text-dark'>
              <i className="fa-solid fa-pen-to-square"></i>
            </a>
            <a className='me-3 btn text-dark'>
              <i className="fa-brands fa-github"></i>
            </a>
            <button className='btn text-dark'>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>

          <p className='text-danger fw-bolder mb-3'>No Projects Added Yet...</p>
        </div>
      </div>
    </>
  );
}

export default MyProjects;