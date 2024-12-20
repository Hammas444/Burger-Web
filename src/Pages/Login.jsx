import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email && password) {
      // Proceed with navigation or authentication
      navigate('/home');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <br /><br /><br /><br />
      <div>
        <center>
          <div
            className="col-lg-6 col-sm-12"
            style={{ borderRadius: 5, boxShadow: '5px 5px 10px rgba(34, 34, 34, 0.171)' }}
          >
            <center>
              <h1
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 700,
                  fontSize: 45,
                }}
              >
                Login
              </h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    style={{ width: '70%', borderRadius: 40 }}
                  />
                </div>
                <br />
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    required
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{ width: '70%', borderRadius: 40 }}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-"
                  style={{ backgroundColor: '#430c58', color: 'white', letterSpacing: 3 }}
                >
                  Login
                </button>
              </form>
            </center>
          </div>
        </center>
      </div>
    </>
  );
};

export default Login;
