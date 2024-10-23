import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Auth() { 
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const toggleForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };

  return (
    <div style={{ marginTop: '50px' }} className="d-flex justify-content-center align-items-center mb-4">
      <div className="container w-75">
        <Link 
          to="/" 
          style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bolder' }}
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </Link>

        <div className="card shadow p-3 bg-info">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/003/049/675/large_2x/login-form-on-a-computer-for-sign-in-to-account-vector.jpg" 
                alt="Login Form" 
                width="100%" 
              />
            </div>

            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <i className="fa-solid fa-list-check fa-2x fw-bolder text-light mt-2"></i>
                <h1 className="fw-bolder text-light mt-2">Project Fair</h1>

                <h3 className="fw-bolder text-warning">
                  {isRegisterForm ? 'Sign up for your account' : 'Sign in to your account'}
                </h3>
              </div>

              <Form className="mt-4 text-dark">
                {isRegisterForm && (
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Control type="text" placeholder="Enter your username" />
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                {isRegisterForm && (
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm your password" />
                  </Form.Group>
                )}

                <div className="mt-3">
                  <button className="btn btn-primary">
                    {isRegisterForm ? 'Register' : 'Login'}
                  </button>
                  <p className="text-light fw-bolder mt-2">
                    {isRegisterForm ? 'Already have an account? Click here to ' : 'New User? Click here to '}
                    <Link 
                      to={isRegisterForm ? '/login' : '/register'} 
                      style={{ textDecoration: 'none', color: isRegisterForm ? 'green' : 'red' }}
                      onClick={toggleForm}
                    >
                      {isRegisterForm ? 'Login' : 'Register'}
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;