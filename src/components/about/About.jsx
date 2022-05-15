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
      <div className='about-right'>
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea et ut obcaecati. 
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam esse nihil porro quo minus vel, quaerat beatae aliquam sed perferendis tempora quae adipisci, rem distinctio molestias aliquid officia animi?
        </p>
      </div>
    </div>
  );
};

export default About;
