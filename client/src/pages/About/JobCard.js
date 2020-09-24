import React from "react";

function JobCard({ employer, position, description, years }) {
  return (
    <div className="about_jobcard">
      <h4 className="jobcard_employer">{employer}</h4>
      <p className="jobcard_position">{position}</p>
      <p className="jobcard_description">{description}</p>
      <p className="jobcard_years">{years}</p>
    </div>
  );
}

export default JobCard;
