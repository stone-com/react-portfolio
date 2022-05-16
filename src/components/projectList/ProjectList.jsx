import React from 'react';
import './projectList.css';
import Project from '../project/Project';

const ProjectList = () => {
  return (
    <div className='projectList'>
      <div className='projectList-texts'>
        <h1 className='projectList-title'>Portfolio</h1>
        <p className='projectList-desc'>
          Here are some of my latest projects. Click on them to see the source
          code or the deployed application!
        </p>
      </div>
      <div className='projectList-list'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default ProjectList;
