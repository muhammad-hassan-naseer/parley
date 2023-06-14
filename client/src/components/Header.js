import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("button").setAttribute("onclick", "closeNav()");
  }

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
          <div className="container">
            <NavLink to="/" className="navbar-brand font-weight-bold">
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
                  <NavLink to="/unlock" className="nav-link ">
                    Transactions <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/unlock" className="nav-link ">
                    Positions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/unlock" className="nav-link ">
                    Orders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/settings" className="nav-link ">
                    Settings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="faq" className="nav-link ">
                    Faq's
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="trades" className="nav-link ">
                    Recent-Trades
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle "
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
                    <NavLink className="dropdown-item" to="/common">
                      FootBall
                    </NavLink>
                    <NavLink className="dropdown-item" to="/common">
                      American FootBall
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to={{ path: "/abouhttps://help.uniswap.org/en/t" }}
                      target="_blank"
                    >
                      Soccer
                    </NavLink>
                    <NavLink className="dropdown-item" to="/about">
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
    </div>
  );
};

export default Header;
