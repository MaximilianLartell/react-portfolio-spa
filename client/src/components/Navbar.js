import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  const [opacity, setOpacity] = useState([0, 0, 0, 0]);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const changeOpacity = (e) => {
    if (e && e.target.id === "nav_1") {
      setOpacity([1, 0.5, 0.5, 0.5]);
    }
    if (e && e.target.id === "nav_2") {
      setOpacity([0.5, 1, 0.5, 0.5]);
    }
    if (e && e.target.id === "nav_3") {
      setOpacity([0.5, 0.5, 1, 0.5]);
    }
    if (e && e.target.id === "nav_4") {
      setOpacity([0.5, 0.5, 0.5, 1]);
    }
  };

  const handleScroll = () => {
    if (ref.current && ref.current.getBoundingClientRect().y > 0) {
      setOpacity([0, 0, 0, 0]);
      setHeight(0);
    } else {
      setOpacity([1, 1, 1, 1]);
      setHeight(50);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div className="navbar-inner" style={{height: height}} ref={ref}>
      <ul className="navbar-items">
        <Link
          id="nav_1"
          className="navbar-link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          onMouseEnter={(e) => changeOpacity(e)}
          onMouseLeave={() => setOpacity([1, 1, 1, 1])}
          style={{ opacity: opacity[0] }}
        >
          Home
        </Link>
        <Link
          id="nav_2"
          className="navbar-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          onMouseEnter={(e) => changeOpacity(e)}
          onMouseLeave={() => setOpacity([1, 1, 1, 1])}
          style={{ opacity: opacity[1] }}
        >
          About me
        </Link>
        <Link
          id="nav_3"
          className="navbar-link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          onMouseEnter={(e) => changeOpacity(e)}
          onMouseLeave={() => setOpacity([1, 1, 1, 1])}
          style={{ opacity: opacity[2] }}
        >
          Projects
        </Link>
        <Link
          id="nav_4"
          className="navbar-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          onMouseEnter={(e) => changeOpacity(e)}
          onMouseLeave={() => setOpacity([1, 1, 1, 1])}
          style={{ opacity: opacity[3] }}
        >
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
