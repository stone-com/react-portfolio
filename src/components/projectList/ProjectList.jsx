import React from 'react';
import './projectList.css';
import Project from '../project/Project';
import data from '../../data';

const ProjectList = () => {
  return (
    <div className='projectList'>
      <div className='projectList-texts'>
        <h1 className='projectList-title'> My Portfolio</h1>
        <p className='projectList-desc'>
          Here are some of my latest projects. Click the name for the source
          code, or click the picture to check out the deployed app!
        </p>
      </div>
      <div className='projectList-list'>
        {/* Map through data array, creating Project component for each one, passing in img and link values as props */}
        {data.map((project) => {
          return (
            <Project
              key={project.id}
              img={project.img}
              link={project.link}
              name={project.name}
              repoLink={project.repoLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
