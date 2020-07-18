import React from "react";
import { Link } from "react-router-dom";

const NavbarLetf = () => {
  return (
    <div className="container-Navbar-Letf ">
      <div className="nav">
        <div className="menu-up">
          <div className="item">
            <Link className="nav-link" to="/">
              <ion-icon name="fitness-outline"></ion-icon>
            </Link>
          </div>
          <div className="item">
            <Link className="nav-link" to="/calendar">
              <ion-icon name="calendar-outline"></ion-icon>
            </Link>
          </div>
          <div className="item">
            <ion-icon name="apps-outline"></ion-icon>
          </div>
          <div className="item">
            <Link className="nav-link" to="/users">
              <ion-icon name="person-outline"></ion-icon>
            </Link>
          </div>
          <div className="item">
            <Link className="nav-link" to="/reports">
              <ion-icon name="document-text-outline"></ion-icon>
            </Link>
          </div>
          <div className="item">
            <Link className="nav-link" to="/graphics">
              <ion-icon name="bar-chart-outline"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="menu-down">
          <ion-icon name="log-out-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default NavbarLetf;
