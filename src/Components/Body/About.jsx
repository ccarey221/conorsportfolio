import React from 'react';
import emailIcon from './../../images/emailIcon.png';
import gitHubIcon from './../../images/gitHubIcon.png';
import linkedInIcon from './../../images/linkedInIcon.png';
import angelListIcon from './../../images/angelListIcon.png';
import './body.css';

export default class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className='aboutContainer'>
          <p className='initialLine'>Hi! I'm a Full-stack developer based in San Francisco, CA.</p>
          <p>Interested in working together? <a href='mailto:cbowlercarey@gmail.com'>Email Me!</a></p>
          <div className='iconRow'>
            <a href='mailto:cbowlercarey@gmail.com'><img src={emailIcon} /></a>
            <a target='_blank' href='https://www.github.com/ccarey221'><img src={gitHubIcon} /></a>
            <a target='_blank' href='https://linkedin.com/in/conor-carey'><img src={linkedInIcon} /></a>
            <a target='_blank' href='https://angel.co/conor-carey-1'><img src={angelListIcon} /></a>
          </div>
        </div>
      </div>
    );
  }
}