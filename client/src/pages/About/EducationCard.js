import React from "react";
import Fade from "react-reveal/Fade";

function EducationCard({ education, school, description, years }) {
  return (
    <div className="about_education-card">
      <Fade right>
        <h4 className="education-card_school">{school}</h4>
        <p className="education-card_education">{education}</p>
        {/* <p className="education-card_description">{description}</p> */}
        <p className="education-card_years">{years}</p>
      </Fade>
    </div>
  );
}

export default EducationCard;
