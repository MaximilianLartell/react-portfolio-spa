import React from 'react';
import { imgExist } from '../../utils';

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
    <div className='projects_project-card'>
      <div className='project-card-content'>
        <h4 className='project-name'>{name}</h4>
        {imgExist(name) ? (
          <img
            className='project-img'
            src={require(`../../pictures/projects/${name}.png`)}
          ></img>
        ) : null}
        <p className='project-language'>Written in {language}</p>
        <p>Description</p>
        <p className='project-description'>{description}</p>
        <p className='project-created'>{created_at.split('T')[0]}</p>
        <div className='link-container'>
          <div
            className='project-card_link'
            onClick={() => window.open(url, '_blank')}
          >
            Github
          </div>
          {homepage ? (
            <div
              className='project-card_link'
              onClick={() => window.open(homepage, '_blank')}
            >
              Webpage
            </div>
          ) : (
            ''
          )}
        </div>
        <span className='circle' />
      </div>
    </div>
  );
}

export default ProjectCard;
