import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UnlockOverlay from "./UnlockOverlay";

const Header2 = () => {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("button").setAttribute("onclick", "closeNav()");
  }
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3 bg-white active">
          <div className="container">
            <NavLink
              to="/"
              className="navbar-brand  font-weight-bold text-dark"
            >
              ParLay
            </NavLink>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <i className="fa fa-bars" />
            </button>
            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink
                    to="/unlock"
                    className="nav-link  font-weight-bold text-dark"
                  >
                    Transactions<span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/unlock"
                    className="nav-link font-weight-bold text-dark"
                  >
                    Positions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/unlock"
                    className="nav-link  font-weight-bold text-dark"
                  >
                    Orders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/settings"
                    className="nav-link font-weight-bold text-dark"
                  >
                    Settings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="faq"
                    className="nav-link font-weight-bold text-dark"
                  >
                    Faq's
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/trades"
                    className="nav-link font-weight-bold text-dark"
                  >
                    Recent Trades
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle font-weight-bold text-dark"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More
                  </NavLink>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/soon">
                      Starting Soon
                    </NavLink>
                    <NavLink className="dropdown-item" to="/common">
                      BaseBall
                    </NavLink>
                    <NavLink className="dropdown-item" to="/Common">
                      American FootBall
                    </NavLink>
                    <NavLink className="dropdown-item" to="/Common">
                     FootBall
                    </NavLink>
                    <NavLink className="dropdown-item" to="/common">
                      Soccer
                    </NavLink>
                    <NavLink className="dropdown-item" to="/common">
                      BasketBall
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
            <div className="navbar-nav ml-auto">
              <button
                id="button"
                type="button"
                className="btn btn-danger"
                onClick={function () {
                  openNav();
                }}
              >
                <i className="fas fa-lock" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <UnlockOverlay />
    </div>
  );
};

export default Header2;
