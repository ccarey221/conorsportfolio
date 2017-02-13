import React from 'react';
import trendWaveImage from './../images/trendWave.png';
import './Emblem.css';

export default class TrendComp extends React.Component {
  render() {
    return (
        <div className="trendwave">
          <a target="_blank" href="http://trendwave.herokuapp.com/">
            <img className="trendWaveImage" src={trendWaveImage} role="presentation" />
          </a>
        </div>
      )
  }
}