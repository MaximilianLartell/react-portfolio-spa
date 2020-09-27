import React from "react";
import Fade from "react-reveal/Fade";

function ProjectCard({
  name,
  description,
  url,
  homepage,
  created_at,
  language,
}) {
  return (
    <div className="projects_project-card">
      <Fade bottom>
        <h4 className="project-card_name">{name}</h4>
        <p className="project-card_description">{description}</p>
        <p className="project-card_created">{created_at}</p>
        <p className="project-card_language">{language}</p>
        <div className="project-card_link-container">
          <a
            className="project-card_link"
            onClick={() => window.open(url, "_blank")}
          >
            Github
          </a>
          {homepage ? (
            <a
              className="project-card_link"
              onClick={() => window.open(homepage, "_blank")}
            >
              Webpage
            </a>
          ) : (
            ""
          )}
        </div>
      </Fade>
    </div>
  );
}

export default ProjectCard;
