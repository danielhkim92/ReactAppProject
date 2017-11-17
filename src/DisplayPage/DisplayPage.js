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
      	<img width="700px" src={this.props.display.pic1}/>
      	<h3 className="center">{this.props.display.name}</h3>
      	<h5 className="center">{this.props.display.intro}</h5>
      	<img width="700px" src={this.props.display.pic2}/>
      	<h5 className="center">{this.props.display.conclusion}</h5>



        	
      </div>
    );
  }
}

export default DisplayPage;