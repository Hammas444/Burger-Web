import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: 'crimson' }}>
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h3 style={{ color: '#fcf373' }}>Section</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0" style={{ color: '#ffffff' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0" style={{ color: '#ffffff' }}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h3 style={{ color: '#fcf373' }}>Section</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0" style={{ color: '#ffffff' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/TableReservation" className="nav-link p-0" style={{ color: '#ffffff' }}>
                  Table Reservation
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/meals" className="nav-link p-0" style={{ color: '#ffffff' }}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h1 style={{ color: '#fcf373' }}>Get In Touch</h1>
              <p style={{ color: 'white' }}>You can easily get in touch with us.</p>
            </form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'white' }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ borderRadius: '0%' }}
              />
              <div id="emailHelp" className="form-text" style={{ color: 'rgb(160, 160, 160)' }} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white' }}>
                Password
              </label>
              <input type="password" className="form-control" id="exampleInputPassword1" style={{ borderRadius: '0%' }} />
            </div>
            <center>
              <button
                type="submit"
                className="btn btn-"
                style={{ borderRadius: '0%', backgroundColor: '#ffd034' }}
                onClick={(e) => {
                  e.preventDefault();
                  alert('Form submitted');
                }}
              >
                Submit
              </button>
            </center>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p style={{ color: 'white' }}>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f" style={{ fontSize: 30, color: '#ffffff' }} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://twitter.com/i/flow/login">
                <i className="fa-brands fa-twitter" style={{ fontSize: 30, color: '#ffffff' }} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://www.instagram.com/?hl=en">
                <i className="fa-brands fa-instagram" style={{ fontSize: 30, color: '#ffffff' }} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
