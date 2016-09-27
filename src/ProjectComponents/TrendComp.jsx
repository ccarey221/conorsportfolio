import React from 'react';
import trendWaveImage from './../images/trendWave.png';

export default class TrendComp extends React.Component {
  render() {
    return (
        <div className="trendwave">
          <a target="_blank" href="http://www.trendwave.stream/">
            <img className="trendWaveImage" src={trendWaveImage} role="presentation" />
          </a>
        </div>
      )
  }
}