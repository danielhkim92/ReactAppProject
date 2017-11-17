import React, { Component } from 'react';


class PersonalityTypes extends Component {
	CurrentType = (e) => {
		this.props.containerCurrentType(e.target.innerText);
	}
  render() {

    return (
		      	<div className="col s2">
		     		<ul className="collection">
		     			<li className="collection-item avatar">
					      <span className="title"><h4>Types</h4></span><br></br>
		      			</li>
		        		<li className="collection-item avatar">
					      <span className="title">Architect</span><br></br>
					      <button onClick={this.CurrentType}>INTJ</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Logician</span><br></br>
					      <button onClick={this.CurrentType}>INTP</button>
					    </li>											
		        		<li className="collection-item avatar">
					      <span className="title">Commander</span><br></br>
					      <button onClick={this.CurrentType}>ENTJ</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Debater</span><br></br>
					      <button onClick={this.CurrentType}>ENTP</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Advocate</span><br></br>
					      <button onClick={this.CurrentType}>INFJ</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Mediator</span><br></br>
					      <button onClick={this.CurrentType}>INFP</button>
					    </li>											
		        		<li className="collection-item avatar">
					      <span className="title">Protagonist</span><br></br>
					      <button onClick={this.CurrentType}>ENFJ</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Campaigner</span><br></br>
					      <button onClick={this.CurrentType}>ENFP</button>
					    </li>        		
					    <li className="collection-item avatar">
					      <span className="title">Logistician</span><br></br>
					      <button onClick={this.CurrentType}>ISTJ</button>
						    </li>        		
					    <li className="collection-item avatar">
					      <span className="title">Defender</span><br></br>
					      <button onClick={this.CurrentType}>ISFJ</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Executive</span><br></br>
					      <button onClick={this.CurrentType}>ESTJ</button>
					    </li>											
						<li className="collection-item avatar">
					      <span className="title">Consul</span><br></br>
					      <button onClick={this.CurrentType}>ESFJ</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Virtuoso</span><br></br>
					      <button onClick={this.CurrentType}>ISTP</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Adventurer</span><br></br>
					      <button onClick={this.CurrentType}>ISFP</button>
					    </li>											
		        		<li className="collection-item avatar">
					      <span className="title">Entrepreneur</span><br></br>
					      <button onClick={this.CurrentType}>ESTP</button>
					    </li>
		        		<li className="collection-item avatar">
					      <span className="title">Entertainer</span><br></br>
					      <button onClick={this.CurrentType}>ESFP</button>
					    </li>
		  			</ul>
	  			</div>

    );
  }
}

export default PersonalityTypes;