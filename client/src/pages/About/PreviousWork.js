import React from 'react';
import Fade from 'react-reveal/Fade';
import JobCard from './JobCard';
import jobHistory from '../../info/jobHistory';

function PreviousWork() {
  return (
    <div className='about_previous-work'>
      <Fade left>
        <h3 className='previout-work-header'>Previous work</h3>
      </Fade>
      {jobHistory().map((el, i) => (
        <Fade left>
          <JobCard
            key={el.employer + i}
            employer={el.employer}
            position={el.position}
            description={el.description}
            years={el.years}
          />
        </Fade>
      ))}
    </div>
  );
}

export default PreviousWork;
