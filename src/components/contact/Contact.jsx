import React from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-background'></div>
      <div className='contact-wrapper'>
        <div className='contact-left'>
          <h1 className='contact-title'>Contact me at any time!</h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img src={Phone} alt='' className='contact-icon' />
              +1-360-628-2047
            </div>
            <div className='contact-info-item'>
              <img src={Email} alt='' className='contact-icon' />
              comstockstone@yahoo.com
            </div>
            <div className='contact-info-item'>
              <img src={Address} alt='' className='contact-icon' />
              Olympia, WA, 98501
            </div>
          </div>
        </div>
        <div className='contact-right'></div>
      </div>
    </div>
  );
};

export default Contact;
