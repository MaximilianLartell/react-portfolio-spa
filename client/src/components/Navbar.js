import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-inner">
      <ul className="navbar-items">
        <Link
          className="navbar-link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        >
          Home
        </Link>
        <Link
          className="navbar-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        >
          About me
        </Link>
        <Link
          className="navbar-link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        >
          Projects
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
