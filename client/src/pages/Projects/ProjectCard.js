import React from "react";
import Fade from "react-reveal/Fade";

function ProjectCard({
  name,
  description,
  url,
  homepage,
  created_at,
  language,
  i,
}) {
  return (
    <div className="projects_project-card">
      <Fade left={i % 2 === 0 ? true : false} right={i % 2 === 0 ? false : true}>
        <h4 className="project-card_name">{name}</h4>
        <p className="project-card_description">{description}</p>
        <p className="project-card_created">{created_at.split("T")[0]}</p>
        <p className="project-card_language">{language}</p>
        <div className="project-card_link-container">
          <div
            className="project-card_link"
            onClick={() => window.open(url, "_blank")}
          >
            Github
          </div>
          {homepage ? (
            <div
              className="project-card_link"
              onClick={() => window.open(homepage, "_blank")}
            >
              Webpage
            </div>
          ) : (
            ""
          )}
        </div>
      </Fade>
    </div>
  );
}

export default ProjectCard;
