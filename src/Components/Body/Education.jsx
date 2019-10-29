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
            <div className='appSection eduApp experience'>
              <h3>EXPERIENCE</h3>
              <h4>Grove Collaborative</h4>
              <strong>Software Engineer II / Acquisition Pod Lead</strong><span>(January 2019 - Present)</span>
              <ul>
                <li>Hit all OKRs  owned by the acquisition team (3 full-stack engineers) since becoming pod lead</li>
                <li>Increased first-purchase conversion rate by 10%</li>
                <li>Increased in-site exploration by 8%</li>
                <li>Achieved high velocity experimentation through strong partnerships with Product, Design, and Marketing and increased new user acquisition rates (ran 10 experiments in Q3 of 2019)</li>
                <li>Instituted new team-wide processes like team retrospectives and planning poker that made sprint planning more effective</li>
              </ul>
              <strong>Software Engineer I</strong><span>(January 2018 - January 2019)</span>
              <ul>
                <li>Built an end-to-end content management system for the Merchandising and Marketing teams to curate marketing and presale pages without additional engineering resources (pages used by over 100,000 customers per year)</li>
                <li>Implemented the site’s first product filtering system that dynamically handled filtering 500+ items across 50+ attributes</li>
              </ul>
              <strong>Associate Software Engineer</strong><span>(March 2017 - January 2018)</span>
              <ul>
                <li>Extended payment system to include PayPal, which increased user acquisition rate by 2%</li>
                <li>Revamped new user onboarding flow, which increased onboarding retention by 10%</li>
              </ul>
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
            <Bubble text='VUE' />
            <Bubble className='largeBubble' text='BACKBONE' />
            <Bubble className='largeBubble' text='JAVASCRIPT' />
            <Bubble text='HTML5' />
            <Bubble text='CSS3' />
            <Bubble className='mediumBubble' text='PYTHON' />
            <Bubble className='mediumBubble' text='DJANGO' />
            <Bubble text='REACT' />
            <Bubble text='NodeJS' />
            <Bubble text='GIT' />
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