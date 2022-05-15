import React from 'react';
import './about.css';
import Laptop from '../../img/coding.jpeg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
            <img src={Laptop} alt="" className="about-img" />
        </div>
      </div>
      <div className='about-right'></div>
    </div>
  );
};

export default About;
