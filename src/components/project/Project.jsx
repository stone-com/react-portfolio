import React from 'react';
import './project.css';

// Pass in img and link, and name values as props, from data array file.
const Project = ({ img, link, name, repoLink }) => {
  return (
    <div className='project'>
      <div className='project-card-top'></div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' />
      </a>
      <a href={repoLink} target='_blank' rel='noreferrer'>
        <h2>{name}</h2>
      </a>
    </div>
  );
};

export default Project;
