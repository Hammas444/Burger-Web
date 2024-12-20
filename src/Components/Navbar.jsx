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
          <a className="navbar-brand" href="/home">
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
          </a>
          <span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <a
                className="btn btn-"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <i className="fa-solid fa-bars" style={{ color: '#ffd034' }} />
              </a>
            </button>
            <div
              className="offcanvas offcanvas-start"
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
                <div>
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${scroll ? 'black-link' : 'white-link'}`}
                        to="/home"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${scroll ? 'black-link' : 'white-link'}`}
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${scroll ? 'black-link' : 'white-link'}`}
                        to="/meals"
                      >
                        Meals
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${scroll ? 'black-link' : 'white-link'}`}
                        to="/TableReservation"
                      >
                        Table Reservation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
