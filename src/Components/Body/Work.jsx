import React from 'react';
import Bubble from './ReusableComponents/BubbleComponents.jsx';
import './body.css';

export default class Work extends React.Component {
  render() {
    return (
      <div className='work'>
        <div className='workContainer'>
          <h2>WORK</h2>
          <div className='appSection'>
            <a target='_blank' href='https://www.getmiddlemile.com/'><h3>Middle Mile</h3></a>
            <h4>Technical Cofounder</h4>
            <p>Distributed fulfillment platform</p>
            <Bubble className='largeWorkBubble' text='REACT NATIVE' />
            <Bubble className='workBubble' text='REACT' />
            <Bubble className='workBubble' text='NodeJS' />
            <Bubble className='workBubble' text='AWS' />
            <Bubble className='workBubble' text='CSS' />
            <Bubble className='workBubble' text='HTML' />
            <Bubble className='workBubble' text='LIQUID' />
            <Bubble className='largeWorkBubble' text='SERVERLESS' />
            <Bubble className='largeWorkBubble' text='INTEGRATIONS' />
          </div>
          <div className='appSection'>
            <a target='_blank' href='https://www.goserv.com/'><h3>ServCommerce</h3></a>
            <h4>Lead Engineer</h4>
            <p>All-in-one platform for home service professionals</p>
            <Bubble className='largeWorkBubble' text='REACT NATIVE' />
            <Bubble className='workBubble' text='SWIFT' />
            <Bubble className='workBubble' text='NodeJS' />
            <Bubble className='workBubble' text='NextJS' />
            <Bubble className='workBubble' text='CSS' />
            <Bubble className='workBubble' text='HTML' />
            <Bubble className='largeWorkBubble' text='SERVERLESS' />
          </div>
          <div className='appSection'>
            <a target='_blank' href='https://www.betterment.com/'><h3>Betterment</h3></a>
            <h4>Flutter Mobile Engineer</h4>
            <p>Investing platform for hands-off, long-term investing</p>
            <Bubble className='workBubble' text='SWIFT' />
            <Bubble className='largeWorkBubble' text='FLUTTER' />
            <Bubble className='workBubble' text='RUBY' />
            <Bubble className='workBubble' text='RAILS' />
          </div>
          <div className='appSection'>
            <a target='_blank' href='https://www.grove.co/'><h3>Grove Collaborative</h3></a>
            <h4>Full-stack Software Engineer</h4>
            <p>E-commerce platform for earth-friendly products (2nd full-time engineer, now 35 full-time)</p>
            <Bubble className='largeWorkBubble' text='JAVASCRIPT' />
            <Bubble className='workBubble' text='VUE' />
            <Bubble className='largeWorkBubble' text='BACKBONE' />
            <Bubble className='largeWorkBubble' text='MARIONETTE' />
            <Bubble className='workBubble' text='PYTHON' />
            <Bubble className='workBubble' text='DJANGO' />
            <Bubble className='workBubble' text='HTML5' />
            <Bubble className='workBubble' text='CSS3' />
          </div>
          <div className='appSection'>
            <a target='_blank' href='http://www.emblemar.com'><h3>Emblem</h3></a>
            <h4>Front End Software Engineer</h4>
            <p>Augmented reality art viewing experience. Built User Interface
            using React, Redux and React Router for faster page rendering. Led
             team organization using agile Scrum method for increased productivity.</p>
             <Bubble className='workBubble' text='REACT' />
             <Bubble className='workBubble' text='REDUX' />
             <Bubble className='workBubble' text='HTML5' />
             <Bubble className='workBubble' text='CSS3' />
             <Bubble className='largeWorkBubble' text='JAVASCRIPT' />
             <Bubble className='largeWorkBubble reactRouter' text='REACT ROUTER' />
          </div>
          <p>... and of course, this page!</p>
        </div>
      </div>
    );
  }
}