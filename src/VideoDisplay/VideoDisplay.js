import React, { Component } from 'react';


class VideoDisplay extends Component {
	constructor(props){
		super(props);
			this.state = {
				youtube1: "",
				youtube2: "",
				youtube3: ""
			}
	}




  render() {
  	const state = this.state;
  	const x = this.props.display.youtubelink1;
  	const y = this.props.display.youtubelink2;
  	const z =	this.props.display.youtubelink3;
  	state.youtube1 = {x};
  	state.youtube2 = {y};
  	state.youtube3 = {z};

  	
    return (
      <div className="col s4">

      	<h3> This is my VideoDisplay</h3>


		  <ul className="collapsible popout">
		    <li>
		      <div className="collapsible-header">First</div>
		      <div className="collapsible-body"><iframe id="1" width="420" height="315"
				src={x}></iframe></div>
		    </li>
		    <li>
		      <div className="collapsible-header">Second</div>
		      <div className="collapsible-body"><iframe id="2" width="420" height="315"
		      	src={y}></iframe></div>
		    </li>
		    <li>
		      <div className="collapsible-header">Third</div>
		      <div className="collapsible-body"><iframe id="3" width="420" height="315"
				src={z}></iframe></div>
		    </li>
		  </ul>
      </div>
    );
  }
}

export default VideoDisplay;
