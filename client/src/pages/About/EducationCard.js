import React from 'react';

function EducationCard({ education, school, description, years }) {
  return (
    <div className='about_education-card'>
      <h4 className='education-card_school'>{school}</h4>
      <p className='education-card_education'>{education}</p>
      <p className='education-card_description'>{description}</p>
      <p className='education-card_years'>{years}</p>
    </div>
  );
}

export default EducationCard;
