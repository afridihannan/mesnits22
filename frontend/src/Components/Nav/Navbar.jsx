import React from "react";
import './style.css'
import mes1 from '../../Assets/mes1.png'

function Navbar() {
  return (
    <div className="menu">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/navigateteam">
            <img className="logo_menu" src={mes1} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about__us">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#poddcast">
                  Event Organised
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#navigateteam">
                  The Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact__us">
                  Contact Us
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li> */}
              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
