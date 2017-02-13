import React, { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import Work from './Components/Body/Work.jsx';
import Education from './Components/Body/Education.jsx';
import About from './Components/Body/About.jsx';
import Contact from './Components/Body/Contact.jsx';
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
          <Contact />
        </div>
          <div id='contact' className="App-footer">
          </div>
        </div>
    );
  }
}

export default App;
