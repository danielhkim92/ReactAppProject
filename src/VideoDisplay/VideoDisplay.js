import React, { Component } from 'react';


class VideoDisplay extends Component {


  render() {
  	
    return (
      <div className="col s4">

      	<h3> This is my VideoDisplay</h3>


		  <ul className="collapsible popout">
		    <li>
		      <div className="collapsible-header">First</div>
		      <div className="collapsible-body"><iframe width="420" height="315"
				src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe></div>
		    </li>
		    <li>
		      <div className="collapsible-header">Second</div>
		      <div className="collapsible-body"><iframe width="420" height="315"
		      	src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe></div>
		    </li>
		    <li>
		      <div className="collapsible-header">Third</div>
		      <div className="collapsible-body"><iframe width="420" height="315"
				src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe></div>
		    </li>
		  </ul>
      </div>
    );
  }
}

export default VideoDisplay;
