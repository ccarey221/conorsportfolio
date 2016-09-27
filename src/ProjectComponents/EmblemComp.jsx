import React from 'react';
import './Emblem.css';
import emblemImage from './../images/emblem.png';

export default class EmblemComp extends React.Component {
  render() {
    return (
        <div className="Emblem">
          <a target="_blank" href="http://www.emblemar.com/">
            <img className="emblemImage" src={emblemImage} role="presentation" />
          </a>
        </div>
      )
  }
}