import React from "react";

function EducationCard({ education, school, description, years }) {
  return (
    <div className="about_educationcard">
      <h4 className="educationcard_employer">{education}</h4>
      <p className="educationcard_position">{school}</p>
      <p className="educationcard_description">{description}</p>
      <p className="educationcard_years">{years}</p>
    </div>
  );
}

export default EducationCard;
