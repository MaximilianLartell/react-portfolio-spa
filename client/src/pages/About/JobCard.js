import React from "react";

function JobCard({ employer, position, description, years }) {
  return (
    <div className="about_job-card">
      <h4 className="job-card_employer">{employer}</h4>
      <p className="job-card_position">{position}</p>
      <p className="job-card_description">{description}</p>
      <p className="job-card_years">{years}</p>
    </div>
  );
}

export default JobCard;
