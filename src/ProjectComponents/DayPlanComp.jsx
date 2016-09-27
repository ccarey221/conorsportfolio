import React from 'react';
import './Emblem.css';
import dayPlanImage from './../images/dayPlan.png';

export default class DayPlanComp extends React.Component {
  render() {
    return (
        <div className="dayPlan">
          <a target="_blank" href="http://www.trendwave.stream/">
            <img className="dayPlanImage"src={dayPlanImage} role="presentation" />
          </a>
        </div>
      )
  }
}