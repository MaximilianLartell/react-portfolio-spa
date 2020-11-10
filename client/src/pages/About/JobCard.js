import React from 'react';
import CustomAccordion from '../../components/Accordion';

function JobCard({ employer, position, description, years }) {
  return (
    <div className='about_job-card'>
      <div className='title-wrapper'>
        <h4 className='job-card_employer'>{employer}</h4>
      </div>
      <p className='job-card_position'>{position}</p>
      <p className='job-card_years'>{years}</p>
      <CustomAccordion text={description} />
    </div>
  );
}

export default JobCard;
