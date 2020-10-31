import React from 'react';
import Fade from 'react-reveal/Fade';
import useProjects from '../../hooks/useProjects';
import ProjectCard from './ProjectCard';
import './projects.css';

function Projects() {
  const projects = useProjects();

  return (
    <div className='projects'>
      <Fade bottom>
        <h1>Projects</h1>
      </Fade>
      <section className='projects_container'>
        {projects.map((el, i) => (
          <ProjectCard
            key={el.name}
            name={el.name}
            description={el.description}
            url={el.url}
            homepage={el.homepage}
            created_at={el.created_at}
            language={el.language}
            i={i}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
