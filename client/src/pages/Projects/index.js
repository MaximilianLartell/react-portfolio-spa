import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import "./projects.css";

function Projects() {
  const projects = useProjects();
  console.log(projects);

  return (
    <div className="projects">
      <Fade bottom>
      <h1>This is my works</h1>
      </Fade>
      <section className="projects_container">
      {projects.map((el) => (
        <ProjectCard
          name={el.name}
          description={el.description}
          url={el.url}
          homepage={el.homepage}
          created_at={el.created_at}
          language={el.language}
        />
      ))}
      </section>

    </div>
  );
}

export default Projects;
