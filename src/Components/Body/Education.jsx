import React from 'react';
import './body.css';

export default class Education extends React.Component {
  render() {
    return (
      <div className='education'>
        <div className='educationContainer'>
          <h2>RESUME</h2>
          <h3>EDUCATION</h3>
          <p>Hack Reactor, Advanced Software Engineering Immersive Program<br/>
          Class of 2016</p>
          <br/>
          <p>Union College, B.S. Computer Science, Economics<br/>
          Class of 2015</p>
        </div>
      </div>
    );
  }
}