import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer bg-white ">
        <div className="container bg-white  ">
          <ul className="list-style-none text-center mt-3">
            <li className="social-icons-facebook list-unstyled d-inline">
              <a
                data-toggle="tooltip"
                href="https://www.facebook.com"
                target="_blank"
                title
                data-original-title="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="social-icons-twitter list-unstyled d-inline ml-3">
              <a
                data-toggle="tooltip"
                href="https://twitter.com"
                target="_blank"
                title
                data-original-title="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="social-icons-instagram list-unstyled d-inline ml-3">
              <a
                data-toggle="tooltip"
                href="http://www.instagram.com"
                target="_blank"
                title
                data-original-title="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>

          <div className="footer-copyright">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link text-dark fsize" to="/">
                  Terms of Service
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link text-dark fsize" to="/faq">
                  FAQ
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link text-dark fsize" to="/faq">
                  About Us
                </NavLink>{" "}
              </li>
            </ul>
            <p className="text-center fsize">
              {" "}
              2021 © <NavLink to="/">ParLay</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
