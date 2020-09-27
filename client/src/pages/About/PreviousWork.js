import React from "react";
import Fade from "react-reveal/Fade";
import JobCard from "./JobCard";
import jobHistory from "../../info/jobHistory";

function PreviousWork() {
  return (
    <div className="about_previous-work">
      <Fade left>
        <h3 className="previout-work-header">Previous work</h3>
        {jobHistory().map((el, i) => (
          <JobCard
            key={el.employer + i}
            employer={el.employer}
            position={el.position}
            description={el.description}
            years={el.year}
          />
        ))}
      </Fade>
    </div>
  );
}

export default PreviousWork;
