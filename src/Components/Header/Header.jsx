import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1 className='name'>Conor Carey</h1>
        <div className='chapters'>
          <a href='#about'>ABOUT</a>
          <a href='#education'>RESUME</a>
          <a href='#work'>WORK</a>
          <a href='#contact'>
            <div className='contactLink'>
              CONTACT
            </div>
          </a>
        </div>
      </div>
      );
  }
}