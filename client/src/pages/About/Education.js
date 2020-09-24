import React from "react";
import EducationCard from "./EducationCard";
import educationHistory from "../../info/educationHistory";


function Education() {
  return (
    <div className="about_education">
      <h3 className="education-header">Education</h3>
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
