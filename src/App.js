import React, { Component } from 'react';
import PersonalityTypes from './PersonalityTypes/PersonalityTypes.js'
import DisplayPage from './DisplayPage/DisplayPage.js'
import VideoDisplay from './VideoDisplay/VideoDisplay.js'
import Test from './Test.js'

class App extends Component {
  render() {
    return (
      <div className='row'>
        <PersonalityTypes/>
        <DisplayPage/>
        <VideoDisplay/>
        <Test/>

      </div>
    );
  }
}

export default App;
