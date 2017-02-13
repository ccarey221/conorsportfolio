import React from 'react';
import Bubble from './ReusableComponents/BubbleComponents.jsx';
import './body.css';

export default class Work extends React.Component {
  render() {
    return (
      <div className='work'>
        <div className='workContainer'>
          <div className='appSection'>
            <h2>WORK</h2>
            <a href='http://www.emblemar.com'><h3>Emblem</h3></a>
            <h4>Front End Software Engineer</h4>
            <p>Augmented reality art viewing experience. Built User Interface
            using React, Redux and React Router for faster page rendering. Led
             team organization using agile Scrum method for increased productivity.</p>
             <Bubble className='workBubble' text='REACT' />
             <Bubble className='workBubble' text='REDUX' />
             <Bubble className='workBubble' text='HTML5' />
             <Bubble className='workBubble' text='CSS3' />
             <Bubble className='largeWorkBubble' text='JAVASCRIPT' />
             <Bubble className='largeWorkBubble' text='REACT ROUTER' />
          </div>
          <hr />
          <div className='appSection'>
            <a href='http://trendwave.herokuapp.com/'><h3>Trendwaves</h3></a>
            <h4>Full-stack Software Engineer</h4>
            <p>Real-time global trend and sentiment analysis. Visuals built using D3 
            provide easy to understand breakdown of trend data.</p>
            <Bubble className='workBubble' text='REACT' />
            <Bubble className='workBubble' text='REDUX' />
            <Bubble className='workBubble' text='D3' />
            <Bubble className='largeWorkBubble' text='JAVASCRIPT' />
            <Bubble className='workBubble' text='HTML5' />
            <Bubble className='workBubble' text='CSS3' />
            <Bubble className='workBubble' text='NodeJS' />
          </div>
          <div className='appSection'>
            <a href='http://www.dayplan.us'><h3>DayPlan</h3></a>
            <h4>Full-stack Software Engineer</h4>
            <p>App to make planning your day easier and more fun!</p>
            <Bubble className='workBubble' text='REACT' />
            <Bubble className='largeWorkBubble' text='REACT ROUTER' />
            <Bubble className='workBubble' text='HTML5' />
            <Bubble className='workBubble' text='CSS3' />
            <Bubble className='workBubble' text='NodeJS' />
          </div>
          <div className='appSection'>
            <h3>Found!</h3>
            <h4>Full-stack Software Engineer</h4>
            <p>Simple lost and found app.</p>
            <Bubble className='mediumWorkBubble' text='ANGULAR' />
            <Bubble className='workBubble' text='HTML5' />
            <Bubble className='workBubble' text='CSS3' />
            <Bubble className='workBubble' text='NodeJS' />
            <Bubble className='workBubble' text='MySQL' />
          </div>
          <p>... and of course, this page!</p>
        </div>
      </div>
    );
  }
}