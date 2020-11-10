import React from 'react';
import CustomAccordion from '../../components/Accordion';
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
            alt='me'
            className='project-img'
            src={require(`../../pictures/projects/${name}.png`)}
          ></img>
        ) : null}
        <div className='project-sub-info'>
          <p className='project-language'>{language}</p>
          <p className='project-created'>{created_at.split('T')[0]}</p>
        </div>
        <CustomAccordion text={description} />
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
