import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap'; // Assuming you're using Bootstrap's Collapse component

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="card shadow p-5 mt-3 me-2">
        <div className="d-flex justify-content-between">
          <h1>Profile</h1>
          <button onClick={() => setOpen(!open)} className='btn btn-outline-info'>
            <i className="fa-solid fa-angle-down fa-beat-fade"></i>
          </button>
        </div>

        <Collapse in={open}>
          <div className="row justify-content-center mt-5 container ">
            <label>
              <input type="file" style={{ display: 'none' }} />
              <img width="200px" height="200px" src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="Profile" />
            </label>
            
            <div className='mt-5'>
              <input type="text" placeholder="GitHub Link" className="form-control" />
              <br />
              <input type="text" placeholder="LinkedIn Link" className="form-control" />
           
            <div className='d-grid mt-5'>
              <button className='btn btn-warning'>Update</button>
            </div>
          </div> </div>

        </Collapse>
      </div>
    </div>
  );
}

export default Profile;