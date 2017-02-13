import React from 'react';
import './bubbleComponent.css';

export default class BubbleComponents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button className={this.props.className || 'bubble'}>{this.props.text}</button>;
  }
}