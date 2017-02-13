import React from 'react';
import Bubble from './ReusableComponents/BubbleComponents.jsx';
import './body.css';

export default class Education extends React.Component {
  render() {
    return (
      <div className='education'>
        <div className='educationContainer'>
          <div>
            <h2>RESUME</h2>
            <h3>EDUCATION</h3>
            <h4>Hack Reactor</h4>
            <p>Advanced Software Engineering Immersive Program<br/>
            Class of 2016</p>
            <br/>
            <p>Union College, B.S. Computer Science, Economics<br/>
            Class of 2015</p>
          </div>
          <div>
            <h3>SKILLS</h3>
            <Bubble text='REACT' />
            <Bubble text='REDUX' />
            <Bubble className='largeBubble' text='JAVASCRIPT' />
            <Bubble text='HTML5' />
            <Bubble text='CSS3' />
            <Bubble text='NodeJS' />
            <Bubble text='MySQL' />
            <Bubble text='GIT' />
            <Bubble className='mediumBubble' text='PYTHON' />
            <Bubble className='mediumBubble' text='JQUERY' />
          </div>
          <div>
            <h3>EXPERIENCE</h3>
          </div>
          <div>
            <h3>RELEVANT COURSEWORK</h3>
          </div>
        </div>
      </div>
    );
  }
}