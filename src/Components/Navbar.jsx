import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid">
     



<nav
  className={`navbar fixed-top navbar-expand-lg ${
    scroll ? 'scrolled-navbar' : 'transparent-navbar'
  }`}
>
  <div className="container-fluid">
    <Link className="navbar-brand" href="/home">
      <span
        style={{
          fontFamily: '"Pacifico", cursive',
          color: scroll ? '#f87721' : '#ffffff',
          marginLeft: 5,
          fontSize: 20,
        }}
      >
        Burger O'Clock
      </span>
    </Link>

    {/* TOGGLER BUTTON (Only visible on mobile) */}
    <button
      className="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
      aria-label="Toggle navigation"
    >
      <i className="fa-solid fa-bars" style={{ color: '#ffd034' }} />
    </button>

    {/* DESKTOP NAV LINKS */}
    <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 desktop-nav">
        <li className="nav-item">
          <Link className="nav-link desktop-link" to="/home" style={{ color: scroll ? '#000' : '#fff' }}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link desktop-link" to="/about" style={{ color: scroll ? '#000' : '#fff' }}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link desktop-link" to="/meals" style={{ color: scroll ? '#000' : '#fff' }}>
            Meals
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link desktop-link" to="/TableReservation" style={{ color: scroll ? '#000' : '#fff' }}>
            Reservation
          </Link>
        </li>
      </ul>
    </div>
  </div>

  {/* OFFCANVAS NAV LINKS */}
  <div
    className="offcanvas offcanvas-start d-lg-none"
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
    style={{ backgroundColor: '#ffffff' }}
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        <span
          style={{
            fontFamily: '"Pacifico", cursive',
            color: '#ffd034',
            marginLeft: 5,
            fontSize: 20,
          }}
        >
          Burger O'Clock
        </span>
      </h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 offcanvas-nav">
        <li className="nav-item">
          <Link className="nav-link offcanvas-link" to="/home" style={{ color: scroll ? '#000' : '#000' }}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link offcanvas-link" to="/about" style={{ color: scroll ? '#000' : '#000' }}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link offcanvas-link" to="/meals" style={{ color: scroll ? '#000' : '#000' }}>
            Meals
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link offcanvas-link" to="/TableReservation" style={{ color: scroll ? '#000' : '#000' }}>
            Reservation
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  );
}

export default Navbar;
