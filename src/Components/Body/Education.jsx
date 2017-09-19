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
            <div className='appSection eduApp'>
              <h3>EXPERIENCE</h3>
              <h4>Grove Collaborative</h4>
              <p>Abstracted payment code to support multiple payment systems</p>
              <p>Integrated PayPal which increased user acquisition by 2%</p>
              <p>Built user flow which increased onboarding retention by 10%</p>
              <p>Designed re-usable components to simplify UI consistency</p>
              <p>Created content management system for marketing pages</p>
              <p>Developed company’s career page</p>
              <p>Handled analytics integrations for Google, Facebook, Taboola, Pinterest, and more</p>
              <p>Participated in interviewing new candidates</p>
            </div>
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