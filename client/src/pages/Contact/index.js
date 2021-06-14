import React from 'react';
import Fade from 'react-reveal/Fade';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './contact.css';

function Projects() {
  const linkedin =
    'https://www.linkedin.com/in/maximilian-skoglund-lartell-96883aa0/';
  const github = 'https://github.com/MaximilianLartell';

  return (
    <Fade>
      <div className='contact'>
        <h1>Contact</h1>
        <a className='contact_email' href='mailto: max.lartell@gmail.com'>
          max.lartell@gmail.com
        </a>
        <IconContext.Provider
          value={{ size: '3em', className: 'contact_link' }}
        >
          <div className='icon-container'>
            <div className='icon-wrapper'>
              <AiFillGithub onClick={() => window.open(github, '_blank')} />
            </div>
            <div className='icon-wrapper'>
              <AiFillLinkedin onClick={() => window.open(linkedin, '_blank')} />
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </Fade>
  );
}

export default Projects;
