import React from "react";
import Fade from "react-reveal/Fade";
import EducationCard from "./EducationCard";
import educationHistory from "../../info/educationHistory";

function Education() {
  return (
    <div className="about_education">
      <Fade right>
        <h3 className="education-header">Education</h3>
      </Fade>
        {educationHistory().map((el, i) => (
          <EducationCard
            key={el.education + i}
            education={el.education}
            school={el.school}
            description={el.description}
            years={el.year}
          />
        ))}
    </div>
  );
}

export default Education;
