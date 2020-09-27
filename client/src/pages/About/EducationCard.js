import React from "react";
import Fade from "react-reveal/Fade";

function EducationCard({ education, school, description, years }) {
  return (
    <div className="about_education-card">
      <Fade right>
        <h4 className="education-card_employer">{education}</h4>
        <p className="education-card_position">{school}</p>
        <p className="education-card_description">{description}</p>
        <p className="education-card_years">{years}</p>
      </Fade>
    </div>
  );
}

export default EducationCard;
