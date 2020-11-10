import React from 'react';
import { SkillCard } from './SkillCard';

function Skills() {
  return (
    <div className='about_skills'>
      <h3 className='skills-header'>Skills</h3>
      <div className='skill-card-wrapper'>
        <SkillCard title='Languages' select='language' />
        <SkillCard title='Frontend' select='frontEnd' />
        <SkillCard title='Backend' select='backEnd' />
        <SkillCard title='Databases' select='databases' />
        <SkillCard title='Version Controll' select='versionControll' />
        <SkillCard title='Tools' select='tools' />
      </div>
    </div>
  );
}

export default Skills;
