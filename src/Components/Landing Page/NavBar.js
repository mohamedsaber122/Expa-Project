import react from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Images/WhatsApp Image 2022-12-06 at 21.31.12.jpg";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <div className="main-nav">
        <div className="parent-nav">
          <img src={logo} />
        </div>
        <div className="nav-links">
          <a className="links" href="#">
            About Us
          </a>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
