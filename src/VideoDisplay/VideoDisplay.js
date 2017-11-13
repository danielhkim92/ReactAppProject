import React, { Component } from 'react';


class VideoDisplay extends Component {
  render() {
    return (
      <div className="col s2">
      	<h3> This is my display show page</h3>
      	<div className="carousel">
		    <img src="https://i.ytimg.com/vi/Ge_22K0UTIY/maxresdefault.jpg"/>
		    <a className="carousel-item" href="#two!"><img src="https://i.ytimg.com/vi/Ge_22K0UTIY/maxresdefault.jpg"/></a>
		    <a className="carousel-item" href="#three!"><img src="https://i.ytimg.com/vi/Ge_22K0UTIY/maxresdefault.jpg"/></a>
		    <a className="carousel-item" href="#four!"><img src="https://i.ytimg.com/vi/Ge_22K0UTIY/maxresdefault.jpg"/></a>
		    <a className="carousel-item" href="#five!"><img src="https://i.ytimg.com/vi/Ge_22K0UTIY/maxresdefault.jpg"/></a>
  		</div>
      </div>
    );
  }
}

export default VideoDisplay;
