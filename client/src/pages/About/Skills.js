import React from "react";
import skills from "../../info/skills";


function Skills() {
  return (
    <div className="about_skills">
      <h3 className="skills-header">Skills</h3>
      <ul className="skills-list">{skills().map(el => <li key={el}>{el}</li>)}</ul>
    </div>
  );
}

export default Skills;
