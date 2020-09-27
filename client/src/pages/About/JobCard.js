import React from "react";
import Fade from "react-reveal/Fade";

function JobCard({ employer, position, description, years }) {
  return (
    <div className="about_job-card">
      <Fade left>
        <h4 className="job-card_employer">{employer}</h4>
        <p className="job-card_position">{position}</p>
        <p className="job-card_description">{description}</p>
        <p className="job-card_years">{years}</p>
      </Fade>
    </div>
  );
}

export default JobCard;
