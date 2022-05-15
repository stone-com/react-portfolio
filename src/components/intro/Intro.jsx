import React from 'react';
import './intro.css';

function Intro() {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-intro'>Hello, My name is</h2>
          <h1 className='intro-name'>Stone Comstock</h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
              <div className='intro-title-item'>Web Developer</div>
              <div className='intro-title-item'>Front End</div>
              <div className='intro-title-item'>Back End</div>
              <div className='intro-title-item'>UI / UX</div>
            </div>
          </div>
        </div>
      </div>
      <div className='intro-right'>right</div>
    </div>
  );
}

export default Intro;
