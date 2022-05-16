import React from 'react';
import './project.css';

// Pass in img and link, and name values as props, from data array file.
const Project = ({ img, link, name }) => {
  return (
    <div className='project'>
      <div className='project-browser'>
        <div className='project-circle'></div>
        <div className='project-circle'></div>
        <div className='project-circle'></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' />
      </a>
        <h2>{name}</h2>
    </div>
  );
};

export default Project;
