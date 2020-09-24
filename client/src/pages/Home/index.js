import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
  return (
    <div className="home">
      <section className="home_content-container">
        <h1>
          Hi, <br /> my name is Maximilian
        </h1>
        <br /> <h3>I'm a Civil engineer, turned fullstack developer.</h3>
        <br />{" "}
        <p>
          Want to know{" "}
          <Link
            className="home_link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
          >
            who I am
          </Link>
          , and{" "}
          <Link
            className="home_link"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
          >
            what I can do?
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Home;
