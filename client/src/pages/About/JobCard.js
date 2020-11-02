import React, { useEffect } from 'react';
import AboutAccordion from '../../components/AboutAccordion';

function JobCard({ employer, position, description, years }) {
  return (
    <div className='about_job-card'>
      <div className='title-wrapper'>
        <h4 className='job-card_employer'>{employer}</h4>
      </div>
      <p className='job-card_position'>{position}</p>
      <AboutAccordion text={description} />
      <p className='job-card_years'>{years}</p>
    </div>
  );
}

export default JobCard;
