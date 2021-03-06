import React from 'react';
import Fade from 'react-reveal/Fade';
import JobCard from './JobCard';
import jobHistory from '../../info/jobHistory';

function PreviousWork() {
  return (
    <div className='about_previous-work'>
      <h3 className='previout-work-header'>Previous work</h3>
      {jobHistory().map((el, i) => (
        <JobCard
          key={el.employer + i}
          employer={el.employer}
          position={el.position}
          description={el.description}
          years={el.years}
        />
      ))}
    </div>
  );
}

export default PreviousWork;
