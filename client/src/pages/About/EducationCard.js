import React from "react";

function EducationCard({ education, school, description, years }) {
  return (
    <div className="about_education-card">
      <h4 className="education-card_employer">{education}</h4>
      <p className="education-card_position">{school}</p>
      <p className="education-card_description">{description}</p>
      <p className="education-card_years">{years}</p>
    </div>
  );
}

export default EducationCard;
