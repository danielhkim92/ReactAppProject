import React, { Component } from 'react';
import PersonalityTypes from './PersonalityTypes/PersonalityTypes.js'
import DisplayPage from './DisplayPage/DisplayPage.js'
import VideoDisplay from './VideoDisplay/VideoDisplay.js'
import Test from './Test.js'

class App extends Component {
  constructor(){
    super();
      this.state = {
        types: [{ name: "INTP",
              youtubelink1: "https://www.youtube.com/watch?v=VT9wlt7AdAI",
              youtubelink2: "https://www.youtube.com/watch?v=3t5-NejwxFo",
              youtubelink3: "https://www.youtube.com/watch?v=1lnQi3lDX4o",
              intro: "It’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well. INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering. People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.",
              conclusion: "Few personality types are as mysterious and controversial as INTJs. Possessing intellect and strategic thinking that allow them to overcome many challenging obstacles, INTJs have the ability to both develop and implement a plan for everything, including their own personal growth.  Yet INTJs can be easily tripped up in areas where careful and rational thinking is more of a liability than an asset. Whether it is finding (or keeping) a partner, making friends, reaching dazzling heights on the career ladder or adapting to the unpredictable, INTJs need to put in a conscious effort to develop their weaker traits and additional skills."
              },
              { name: "ENTP",
              youtubelink1: "https://www.youtube.com/watch?v=VT9wlt7AdAI",
              youtubelink2: "https://www.youtube.com/watch?v=3t5-NejwxFo",
              youtubelink3: "https://www.youtube.com/watch?v=1lnQi3lDX4o",
              intro: "It’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well. INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering. People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.",
              conclusion: "Few personality types are as mysterious and controversial as INTJs. Possessing intellect and strategic thinking that allow them to overcome many challenging obstacles, INTJs have the ability to both develop and implement a plan for everything, including their own personal growth.  Yet INTJs can be easily tripped up in areas where careful and rational thinking is more of a liability than an asset. Whether it is finding (or keeping) a partner, making friends, reaching dazzling heights on the career ladder or adapting to the unpredictable, INTJs need to put in a conscious effort to develop their weaker traits and additional skills."
              }]
      }
  }

  render() {
    return (
      <div className='row'>
        <PersonalityTypes />
        <DisplayPage type={this.state.types}/>
        <VideoDisplay/>
        <Test/>
      </div>
    );
  }
}

export default App;
