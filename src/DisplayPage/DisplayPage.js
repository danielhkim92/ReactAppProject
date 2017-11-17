import React, { Component } from 'react';
import './DisplayPage.css';


class DisplayPage extends Component {
	constructor(){
		super();
		 this.state = {
			displayType: "",

		 
		 }

							
			
	}



	render() {
		// const state = this.state;
		// let x = this.props.currentType;
		// state.displayType = {x};
		// console.log(this.state.displayType);
		// let y = this.props.currentIndex;
		// console.log(y);
		// const q = this.props.types[y];
		// this.state.display = q;



		


    return (
      <div id="display" className="col s6 fixed">
      	<h4 className="center">{this.props.display.name}</h4>
      	<p className="center">{this.props.display.intro}</p>
      	<p className="center">{this.props.display.conclusion}</p>



        	
      </div>
    );
  }
}

export default DisplayPage;