import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="bio-container">
      <Fade bottom>
        <h3 className="bio-header">Bio</h3>
        <p className="bio-paragraph">
        I’m a native Stockholmer with a passion for coding and problem solving. I love to develop ideas and knowledge together with other people, and I believe that a strong team builds a strong product. At my last employer I learned the importance of thinking about the fine details while still maintaining the big picture, a skill which I’m eager to try out in a development environment.
        </p>
      </Fade>
    </div>
  );
}

export default About;
