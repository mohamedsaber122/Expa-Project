import react from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../Images/WhatsApp Image 2022-12-06 at 21.31.12.jpg";
import "./NavBar.css";
const NavBar = () => {
  dispatch = useDispatch();
  return (
    <div>
      <div className="main-nav">
        <div className="parent-nav">
          <Link to="/">
            {" "}
            <img src={logo} />{" "}
          </Link>
        </div>
        <div className="nav-links">
          <a className="links" href="#">
            About Us
          </a>
          <Button onClick={() => dispatch("/sign-up")}>Sign Up</Button>
          <Button onClick={() => dispatch("/sign-in")}>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
