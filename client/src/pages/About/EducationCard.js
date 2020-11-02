import React from 'react';
import AboutAccordion from '../../components/AboutAccordion';

function EducationCard({ education, school, abbrevation, description, years }) {
  return (
    <div className='about_education-card'>
      <div className='title-wrapper'>
        <h4 className='education-card_school'>{`${abbrevation} `} </h4>
        <p className='education-card_full-school'>{school}</p>
      </div>
      <p className='education-card_education'>{education}</p>
      <AboutAccordion text={description} />
      <p className='education-card_years'>{years}</p>
    </div>
  );
}

export default EducationCard;
