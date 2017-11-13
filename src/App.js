import React, { Component } from 'react';
import PersonalityTypes from './PersonalityTypes/PersonalityTypes.js'
import DisplayPage from './DisplayPage/DisplayPage.js'
import VideoDisplay from './VideoDisplay/VideoDisplay.js'


class App extends Component {
  render() {
    return (
      <div className='row'>
        <PersonalityTypes/>
        <DisplayPage/>
        <VideoDisplay/>

      </div>
    );
  }
}

export default App;
