import React, { useEffect } from "react";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard"

function Projects() {
  const projects = useProjects();

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <div className="projects">
      <h1>This is my works</h1>
      {projects.map((el) => (
        <ProjectCard
          name={el.name}
          description={el.description}
          url={el.url}
          created_at={el.created_at}
          language={el.language}
        />
      ))}
    </div>
  );
}

export default Projects;
