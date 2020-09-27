import React from "react";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./contact.css";

function Projects() {
  const linkedin =
    "https://www.linkedin.com/in/maximilian-skoglund-lartell-96883aa0/";
  const github = "https://github.com/MaximilianLartell";

  return (
    <Fade>
      <div className="contact">
        <h1>Contact</h1>
        <a className="contact_email" href="mailto: abc@example.com">
          max.lartell@gmail.com
        </a>
        <IconContext.Provider
          value={{ size: "2em", className: "contact_link" }}
        >
          <div>
            <AiFillGithub onClick={() => window.open(github, "_blank")} />
            <AiFillLinkedin onClick={() => window.open(linkedin, "_blank")} />
          </div>
        </IconContext.Provider>
      </div>
    </Fade>
  );
}

export default Projects;
