import React from 'react';
import Bubble from './ReusableComponents/BubbleComponents.jsx';
import './body.css';

export default class Education extends React.Component {
  render() {
    return (
      <div className='education'>
        <div className='educationContainer'>
          <div className='appSection eduApp'>
            <h2>RESUME</h2>
            <h3>EDUCATION</h3>
            <h4>Hack Reactor</h4>
            <p>Advanced Software Engineering Immersive Program<br/>
            Class of 2016</p>
            <h4>Union College</h4>
            <p>B.S. Computer Science, Economics<br/>
            Class of 2015</p>
          </div>
          <div className='appSection eduApp'>
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
          <div className='appSection eduApp'>
            <h3>EXPERIENCE</h3>
            <h4>MeterAid</h4>
            <p>Worked directly with the CEO to design Python
            scripts to collect and organize data from remote
            Raspberry Pi Computers</p>
            <p>Set up notification system to share when a meter
            maid approached user's car location</p>
          </div>
          <div className='appSection eduApp'>
            <h3>LEADERSHIP</h3>
            <h4>Union College Entrepreneurship Organization</h4>
            <p>President (Fall '14, Spring '15)</p>
            <p>Vice President (Fall '13, Spring '14)</p>
          </div>
          <div className='appSection eduApp'>
            <h3>RELEVANT COURSEWORK</h3>
            <h4>Data Visualizations</h4>
            <p>Scraped web data using Python UrlLib2 and Beautiful Soup</p>
            <h4>Data Structures</h4>
            <p>Organized data in most effective and relavent ways</p>
            <h4>Algorithms</h4>
            <p>Analyzed and designed algorithms</p>
          </div>
        </div>
      </div>
    );
  }
}