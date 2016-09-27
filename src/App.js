import React, { Component } from 'react';
import EmblemComp from './ProjectComponents/EmblemComp.jsx';
import TrendComp from './ProjectComponents/TrendComp.jsx';
import DayPlanComp from './ProjectComponents/DayPlanComp.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Conor Carey's Portfolio</h2>
        </div>
        <div className="App-container">
          <EmblemComp />
          <TrendComp />
          <DayPlanComp />
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
