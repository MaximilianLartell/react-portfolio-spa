import React from 'react';
import Fade from 'react-reveal/Fade';
import AboutText from './AboutText';
import PreviousWork from './PreviousWork';
import Education from './Education';
import Skills from './Skills';
import profilePic from '../../pictures/profile3.png';
import './about.css';

function About() {
  return (
    <div>
      <div className='about'>
        <h1>About me</h1>
        <img alt='img of me' src={profilePic}></img>
        <AboutText />
        <section className='about_experience'>
          <PreviousWork />
          <Education />
        </section>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <Skills />
      </div>
    </div>
  );
}

export default About;
