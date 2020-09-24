import React from "react";
import AboutText from "./AboutText";
import PreviousWork from "./PreviousWork";
import Education from "./Education";
import Skills from "./Skills";
import profilePic from '../../pictures/profile.jpg'

function About() {
  return (
    <div className="about">
      <h1>About me</h1>
      <img src={profilePic}></img>
      <AboutText />
      <section className="about_experience-container">
        <PreviousWork />
        <Education />
      </section>
      <Skills />
    </div>
  );
}

export default About;
