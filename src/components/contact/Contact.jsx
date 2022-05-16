import React from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import Resume from '../../img/resume.pdf';

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
            <a href={Resume} download>
              <button>Download my Resume!</button>
            </a>
          </div>
        </div>
        <div className='contact-right'>
          <p className='contact-description'>
            Have an idea for a project? Get in touch with me and let's see if we
            can work something out!
          </p>
          <form action=''>
            <input type='text' placeholder='Name' name='user_name' />
            <input type='text' placeholder='Subject' name='user_subject' />
            <input type='text' placeholder='Email' name='user_email' />
            <textarea name='message' rows='5' placeholder='Message'></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
