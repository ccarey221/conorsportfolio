import React, { Component } from 'react';
import EmblemComp from './ProjectComponents/EmblemComp.jsx';
import TrendComp from './ProjectComponents/TrendComp.jsx';
import DayPlanComp from './ProjectComponents/DayPlanComp.jsx';
import myPic from './images/myPic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <h2>Conor Carey's Portfolio</h2>
          </div>
          <div className="Headers">
            <h3>About Me</h3>
            <h3>Work</h3>
          </div>
        </div>
        <div className="Content-container">
          <div className="App-aboutMe">
            <div className="AboutMe-topHalf">
              <img src={myPic} role="presentation"/>
              <div>
                <ul>
                  <b>Top Skills</b>
                  <li>_________</li>
                  <li>React</li>
                  <li>Javascript(es6)</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Git</li>
                  <li>MySQL</li>
                  <li>NodeJS</li>
                  <li>D3</li>
                  <li>...and more!</li>
                </ul>
              </div>
            </div>
            <div>
              <p>
                I'm a fullstack developer with excellent 
                Javascript skills and experience with Python and Java. I did 
                CS at Union College and learned practical Web Dev skills at 
                Hack Reactor. I love developing with React for its
                intuitive structure and the super-fast virtual DOM! 
                I've always loved attempting to anticipate exactly what others
                would like in an interface, but am always open to feedback when
                I'm wrong. Creating simple, intuitive apps is my passion!
              </p>
            </div>
          </div>
          <div className="App-container">
            <EmblemComp />
            <TrendComp />
            <DayPlanComp />
          </div>
        </div>
        <div className="App-footer">
          <p>
             Conor Carey<br/>
             240 Cumberland St.<br/>
             San Francisco, CA<br/>
             Cell: 727-366-5477<br/>
             Email: cbowlercarey@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

export default App;
