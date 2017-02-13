import React, { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import Work from './Components/Body/Work.jsx';
import Education from './Components/Body/Education.jsx';
import About from './Components/Body/About.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <Header />
        <div className='contentContainer'>
          <span className='anchor' id='about'></span>
          <About />
          <span className='anchor' id='education'></span>
          <Education />
          <span className='anchor' id='work'></span>
          <Work />
        </div>
          <div id='contact' className="App-footer">
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
