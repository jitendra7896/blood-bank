import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="py-1 main-top">
      <Navbar expand="lg" className="navbar-light fixed-navi">
        <div className="container">
          <Navbar.Brand
            href="index.php"
            className="font-weight-bold font-italic"
          >
            BDMS <FontAwesomeIcon icon={faSyringe} />
          </Navbar.Brand>
          {/* Toggle */}
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="text-center">
            <Nav className="ml-lg-auto">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-item mt-lg-0 mt-3"
              >
                Home
              </Link>
              <Link
                to="/about"
                activeClassName="active"
                className="nav-item mx-lg-4 my-lg-0 my-3"
              >
                About Us
              </Link>
              <Link
                to="/donor-list"
                activeClassName="active"
                className="nav-item mx-lg-4 my-lg-0 my-3"
              >
                Donor List
              </Link>
              {/* <NavDropdown title="My Account" id="navbarDropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/change-password">
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/request-received">
                  Request Received
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logout">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
