import React from 'react';
import emailIcon from './../../images/emailIcon.png';
import gitHubIcon from './../../images/gitHubIcon.png';
import linkedInIcon from './../../images/linkedInIcon.png';
import angelListIcon from './../../images/angelListIcon.png';
import selfie from './../../images/myPic.png';
import signiature from './../../images/bitmap.png';
import './body.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className='contactContainer'>
          <h2>CONTACT</h2>
          <p className='initialLine'>Currently available for full-time positions in New York or remote work.</p>
           <p>Send a message to <a href='mailto:cbowlercarey@gmail.com'>cbowlercarey@gmail.com</a></p>
           <div className='me'>
             <img className='myPic' src={selfie} role='presentation' />
             <img src={signiature} role='presentation' />
            </div>
          <div className='iconRow'>
            <a href='mailto:cbowlercarey@gmail.com'><img src={emailIcon} role='presentation' /></a>
            <a target='_blank' href='https://www.github.com/ccarey221'><img src={gitHubIcon} role='presentation' /></a>
            <a target='_blank' href='https://linkedin.com/in/conor-carey'><img src={linkedInIcon} role='presentation' /></a>
            <a target='_blank' href='https://angel.co/conor-carey-1'><img src={angelListIcon} role='presentation' /></a>
          </div>
        </div>
      </div>
    );
  }
}