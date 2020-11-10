import React, { useEffect, useState } from 'react';
import skills from '../../info/skills';

const chooseSkill = (key) => {
  if (key === 'language') {
    return skills().programmingLanguages;
  }
  if (key === 'frontEnd') {
    return skills().frontEnd;
  }
  if (key === 'backEnd') {
    return skills().backEnd;
  }
  if (key === 'databases') {
    return skills().databases;
  }
  if (key === 'versionControll') {
    return skills().versionControll;
  }
  if (key === 'tools') {
    return skills().tools;
  }
};

export const SkillCard = ({ title, select }) => {
  const [skills, setSkills] = useState();

  useEffect(() => {
    setSkills(chooseSkill(select));
  }, [select]);

  return (
    <div key={title} className='skill-card'>
      <h4 className='skill-card_title'>{title}</h4>
      <ul>
        {skills
          ? skills.map((el) => (
              <li key={el.l} className='skill-element'>
                <img
                  alt='skill logo'
                  className='skill-card_img'
                  src={require(`../../pictures/icons/${el.i}`)}
                ></img>
                <p className='skill-card_description'>{el.l}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
