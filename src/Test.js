import React, { Component } from 'react';


class Test extends Component {
	constructor(){
		super();
			this.state = {
				answers: {	q1: '',
							q2: '',
							q3: '',
							q4: '',
							q5: '',
							q6: '',
							q7: '',
							q8: '',
							q9: '',
							q10: '',
							q11: '',
							q12: '',
							q13: '',
							q14: '',
							q15: '',
							q16: '',
							q17: '',
							q18: '',
							q19: '',
							q20: '',
							q21: '',
							q22: '',
							q23: '',
							q24: '',
							q25: '',
							q26: '',
							q27: '',
							q28: '',
							q29: '',
							q30: '',
							q31: '',
							q32: ''
						},
				IE: "",
				SN: "",
				FT: "",
				JP: ""
			}
	}

	DetermineIE = () => {
		const state = this.state
		const answers = this.state.answers
		const IE = 30 - answers.q3 - answers.q11 + answers.q15 - answers.q19 + answers.q23 + answers.q27 - answers.q31
		if(IE > 24){
			state.IE = "E"
			this.setState(state)
		}else{
			state.IE = "I"
			this.setState(state)
		}
	}
	DetermineSN = () => {
		const state = this.state
		const answers = this.state.answers
		const SN = 12 + answers.q4 + answers.q8 + answers.q12 + answers.q16 + answers.q20 - answers.q24 - answers.q28 + answers.q32
		if(SN > 24){
			state.SN = "N"
			this.setState(state)
		}else{
			state.SN = "S"
			this.setState(state)
		}
	}
	DetermineFT = () => {
		const state = this.state
		const answers = this.state.answers
		const FT = 30 - answers.q2 + answers.q6 + answers.q10 - answers.q14 - answers.q18 + answers.q22 - answers.q26 - answers.q30
		if(FT > 24){
			state.FT = "T"
			this.setState(state)
		}else{
			state.FT = "F"
			this.setState(state)
		}		
	}
	DetermineJP = () => {
		const state = this.state
		const answers = this.state.answers
		const JP = 18 + answers.q1 + answers.q5 - answers.q9 + answers.q13 - answers.q17 + answers.q21 - answers.q25 + answers.q29
		if(JP > 24){
			state.JP = "P"
			this.setState(state)
		}else{
			state.JP = "J"
			this.setState(state)
		}
		console.log(state)		
	}

  render() {
  	
    return (
    	<div className="col s8">
		<h3> This is my Test</h3>
		<htmlForm action="test" className="center-align">
		    <p className="center-align">makes lists
		      <input name="q1" value="1" type="radio" id="1"/><label htmlFor="1"></label>
		      <input name="q1" value="2" type="radio" id="2"/><label htmlFor="2"></label>
		      <input name="q1" value="3" type="radio" id="3"/><label htmlFor="3"></label>
		      <input name="q1" value="4" type="radio" id="4"/><label htmlFor="4"></label>
		      <input name="q1" value="5" type="radio" id="5"/><label htmlFor="5"></label>
			relies on memory</p>
		    <p className="center-align">skeptical
		      <input name="q2" value="1" type="radio" id="6"/><label htmlFor="6"></label>
		      <input name="q2" value="2" type="radio" id="7"/><label htmlFor="7"></label>
		      <input name="q2" value="3" type="radio" id="8"/><label htmlFor="8"></label>
		      <input name="q2" value="4" type="radio" id="9"/><label htmlFor="9"></label>
		      <input name="q2" value="5" type="radio" id="10"/><label htmlFor="10"></label>
			wants to believe</p>
		    <p className="center-align">bored by time alone
		      <input name="q3" value="1" type="radio" id="11"/><label htmlFor="11"></label>
		      <input name="q3" value="2" type="radio" id="12"/><label htmlFor="12"></label>
		      <input name="q3" value="3" type="radio" id="13"/><label htmlFor="13"></label>
		      <input name="q3" value="4" type="radio" id="14"/><label htmlFor="14"></label>
		      <input name="q3" value="5" type="radio" id="15"/><label htmlFor="15"></label>
			needs time alone</p>		    
			<p className="center-align">accepts things the way they are
		      <input name="q4" value="1" type="radio" id="16"/><label htmlFor="16"></label>
		      <input name="q4" value="2" type="radio" id="17"/><label htmlFor="17"></label>
		      <input name="q4" value="3" type="radio" id="18"/><label htmlFor="18"></label>
		      <input name="q4" value="4" type="radio" id="19"/><label htmlFor="19"></label>
		      <input name="q4" value="5" type="radio" id="20"/><label htmlFor="20"></label>
			unsatisfied the way things are</p>
			<p className="center-align">keeps a clean room
		      <input name="q5" value="1" type="radio" id="21"/><label htmlFor="21"></label>
		      <input name="q5" value="2" type="radio" id="22"/><label htmlFor="22"></label>
		      <input name="q5" value="3" type="radio" id="23"/><label htmlFor="23"></label>
		      <input name="q5" value="4" type="radio" id="24"/><label htmlFor="24"></label>
		      <input name="q5" value="5" type="radio" id="25"/><label htmlFor="25"></label>
			throws stuff wherever</p>
		    <p className="center-align">thinks "robotic" is an insult
		      <input name="q6" value="1" type="radio" id="26"/><label htmlFor="26"></label>
		      <input name="q6" value="2" type="radio" id="27"/><label htmlFor="27"></label>
		      <input name="q6" value="3" type="radio" id="28"/><label htmlFor="28"></label>
		      <input name="q6" value="4" type="radio" id="29"/><label htmlFor="29"></label>
		      <input name="q6" value="5" type="radio" id="30"/><label htmlFor="30"></label>
			strives to have a mechanical mind</p>
		    <p className="center-align">energetic
		      <input name="q7" value="1" type="radio" id="31"/><label htmlFor="31"></label>
		      <input name="q7" value="2" type="radio" id="32"/><label htmlFor="32"></label>
		      <input name="q7" value="3" type="radio" id="33"/><label htmlFor="33"></label>
		      <input name="q7" value="4" type="radio" id="34"/><label htmlFor="34"></label>
		      <input name="q7" value="5" type="radio" id="35"/><label htmlFor="35"></label>
			mellow</p>
		    <p className="center-align">prefer multiple choice test
		      <input name="q8" value="1" type="radio" id="36"/><label htmlFor="36"></label>
		      <input name="q8" value="2" type="radio" id="37"/><label htmlFor="37"></label>
		      <input name="q8" value="3" type="radio" id="38"/><label htmlFor="38"></label>
		      <input name="q8" value="4" type="radio" id="39"/><label htmlFor="39"></label>
		      <input name="q8" value="5" type="radio" id="40"/><label htmlFor="40"></label>
			prefer essay answers</p>	
		    <p className="center-align">chaotic
		      <input name="q9" value="1" type="radio" id="41"/><label htmlFor="41"></label>
		      <input name="q9" value="2" type="radio" id="42"/><label htmlFor="42"></label>
		      <input name="q9" value="3" type="radio" id="43"/><label htmlFor="43"></label>
		      <input name="q9" value="4" type="radio" id="44"/><label htmlFor="44"></label>
		      <input name="q9" value="5" type="radio" id="45"/><label htmlFor="45"></label>
			organized</p>
		    <p className="center-align">easily hurt
		      <input name="q10" value="1" type="radio" id="46"/><label htmlFor="46"></label>
		      <input name="q10" value="2" type="radio" id="47"/><label htmlFor="47"></label>
		      <input name="q10" value="3" type="radio" id="48"/><label htmlFor="48"></label>
		      <input name="q10" value="4" type="radio" id="49"/><label htmlFor="49"></label>
		      <input name="q10" value="5" type="radio" id="50"/><label htmlFor="50"></label>
			thick skinned</p>
		    <p className="center-align">works best in qs
		      <input name="q11" value="1" type="radio" id="51"/><label htmlFor="51"></label>
		      <input name="q11" value="2" type="radio" id="52"/><label htmlFor="52"></label>
		      <input name="q11" value="3" type="radio" id="53"/><label htmlFor="53"></label>
		      <input name="q11" value="4" type="radio" id="54"/><label htmlFor="54"></label>
		      <input name="q11" value="5" type="radio" id="55"/><label htmlFor="55"></label>
			works best alone</p>		    
			<p className="center-align">focused on the present
		      <input name="q12" value="1" type="radio" id="56"/><label htmlFor="56"></label>
		      <input name="q12" value="2" type="radio" id="57"/><label htmlFor="57"></label>
		      <input name="q12" value="3" type="radio" id="58"/><label htmlFor="58"></label>
		      <input name="q12" value="4" type="radio" id="59"/><label htmlFor="59"></label>
		      <input name="q12" value="5" type="radio" id="60"/><label htmlFor="60"></label>
			focused on the future</p>
			<p className="center-align">plans far ahead
		      <input name="q13" value="1" type="radio" id="61"/><label htmlFor="61"></label>
		      <input name="q13" value="2" type="radio" id="62"/><label htmlFor="62"></label>
		      <input name="q13" value="3" type="radio" id="63"/><label htmlFor="63"></label>
		      <input name="q13" value="4" type="radio" id="64"/><label htmlFor="64"></label>
		      <input name="q13" value="5" type="radio" id="65"/><label htmlFor="65"></label>
			plans last minute</p>
		    <p className="center-align">wants people's respect
		      <input name="q14" value="1" type="radio" id="66"/><label htmlFor="66"></label>
		      <input name="q14" value="2" type="radio" id="67"/><label htmlFor="67"></label>
		      <input name="q14" value="3" type="radio" id="68"/><label htmlFor="68"></label>
		      <input name="q14" value="4" type="radio" id="69"/><label htmlFor="69"></label>
		      <input name="q14" value="5" type="radio" id="70"/><label htmlFor="70"></label>
			wants people's love</p>
		    <p className="center-align">gets worn out by parties
		      <input name="q15" value="1" type="radio" id="71"/><label htmlFor="71"></label>
		      <input name="q15" value="2" type="radio" id="72"/><label htmlFor="72"></label>
		      <input name="q15" value="3" type="radio" id="73"/><label htmlFor="73"></label>
		      <input name="q15" value="4" type="radio" id="74"/><label htmlFor="74"></label>
		      <input name="q15" value="5" type="radio" id="75"/><label htmlFor="75"></label>
			gets fired up by parties</p>
		    <p className="center-align">fits in
		      <input name="q16" value="1" type="radio" id="76"/><label htmlFor="76"></label>
		      <input name="q16" value="2" type="radio" id="77"/><label htmlFor="77"></label>
		      <input name="q16" value="3" type="radio" id="78"/><label htmlFor="78"></label>
		      <input name="q16" value="4" type="radio" id="79"/><label htmlFor="79"></label>
		      <input name="q16" value="5" type="radio" id="80"/><label htmlFor="80"></label>
			stands out</p>
		    <p className="center-align">keeps option open
		      <input name="q17" value="1" type="radio" id="81"/><label htmlFor="81"></label>
		      <input name="q17" value="2" type="radio" id="82"/><label htmlFor="82"></label>
		      <input name="q17" value="3" type="radio" id="83"/><label htmlFor="83"></label>
		      <input name="q17" value="4" type="radio" id="84"/><label htmlFor="84"></label>
		      <input name="q17" value="5" type="radio" id="85"/><label htmlFor="85"></label>
			commits</p>
		    <p className="center-align">wants to be good at fixing things
		      <input name="q18" value="1" type="radio" id="8"/><label htmlFor="8"></label>
		      <input name="q18" value="2" type="radio" id="8"/><label htmlFor="8"></label>
		      <input name="q18" value="3" type="radio" id="8"/><label htmlFor="8"></label>
		      <input name="q18" value="4" type="radio" id="8"/><label htmlFor="8"></label>
		      <input name="q18" value="5" type="radio" id="90"/><label htmlFor="90"></label>
			wants to be good at fixing with people</p>
		    <p className="center-align">talks more
		      <input name="q19" value="1" type="radio" id="91"/><label htmlFor="91"></label>
		      <input name="q19" value="2" type="radio" id="92"/><label htmlFor="92"></label>
		      <input name="q19" value="3" type="radio" id="93"/><label htmlFor="93"></label>
		      <input name="q19" value="4" type="radio" id="94"/><label htmlFor="94"></label>
		      <input name="q19" value="5" type="radio" id="95"/><label htmlFor="95"></label>
			listens more</p>		    
			<p className="center-align">when describing an event, will tell people what happened
		      <input name="q20" value="1" type="radio" id="96"/><label htmlFor="96"></label>
		      <input name="q20" value="2" type="radio" id="97"/><label htmlFor="97"></label>
		      <input name="q20" value="3" type="radio" id="98"/><label htmlFor="98"></label>
		      <input name="q20" value="4" type="radio" id="99"/><label htmlFor="99"></label>
		      <input name="q20" value="5" type="radio" id="100"/><label htmlFor="100"></label>
			when describing an event, will tell people what it meant</p>
			<p className="center-align">gets work done right away
		      <input name="q21" value="1" type="radio" id="101"/><label htmlFor="101"></label>
		      <input name="q21" value="2" type="radio" id="102"/><label htmlFor="102"></label>
		      <input name="q21" value="3" type="radio" id="103"/><label htmlFor="103"></label>
		      <input name="q21" value="4" type="radio" id="104"/><label htmlFor="104"></label>
		      <input name="q21" value="5" type="radio" id="105"/><label htmlFor="105"></label>
			procrascinates</p>
		    <p className="center-align">follows the heart
		      <input name="q22" value="1" type="radio" id="106"/><label htmlFor="106"></label>
		      <input name="q22" value="2" type="radio" id="107"/><label htmlFor="107"></label>
		      <input name="q22" value="3" type="radio" id="108"/><label htmlFor="108"></label>
		      <input name="q22" value="4" type="radio" id="109"/><label htmlFor="109"></label>
		      <input name="q22" value="5" type="radio" id="110"/><label htmlFor="110"></label>
			follows the head</p>
		    <p className="center-align">prefers to stay home
		      <input name="q23" value="1" type="radio" id="111"/><label htmlFor="111"></label>
		      <input name="q23" value="2" type="radio" id="112"/><label htmlFor="112"></label>
		      <input name="q23" value="3" type="radio" id="113"/><label htmlFor="113"></label>
		      <input name="q23" value="4" type="radio" id="114"/><label htmlFor="114"></label>
		      <input name="q23" value="5" type="radio" id="115"/><label htmlFor="115"></label>
			goes out frequently</p>
		    <p className="center-align">wants the big picture
		      <input name="q24" value="1" type="radio" id="116"/><label htmlFor="116"></label>
		      <input name="q24" value="2" type="radio" id="117"/><label htmlFor="117"></label>
		      <input name="q24" value="3" type="radio" id="118"/><label htmlFor="118"></label>
		      <input name="q24" value="4" type="radio" id="119"/><label htmlFor="119"></label>
		      <input name="q24" value="5" type="radio" id="120"/><label htmlFor="120"></label>
			wants the details</p>	
		    <p className="center-align">improvises
		      <input name="q25" value="1" type="radio" id="121"/><label htmlFor="121"></label>
		      <input name="q25" value="2" type="radio" id="122"/><label htmlFor="122"></label>
		      <input name="q25" value="3" type="radio" id="123"/><label htmlFor="123"></label>
		      <input name="q25" value="4" type="radio" id="124"/><label htmlFor="124"></label>
		      <input name="q25" value="5" type="radio" id="125"/><label htmlFor="125"></label>
			prepares</p>
		    <p className="center-align">based morality on justic
		      <input name="q26" value="1" type="radio" id="126"/><label htmlFor="126"></label>
		      <input name="q26" value="2" type="radio" id="127"/><label htmlFor="127"></label>
		      <input name="q26" value="3" type="radio" id="128"/><label htmlFor="128"></label>
		      <input name="q26" value="4" type="radio" id="129"/><label htmlFor="129"></label>
		      <input name="q26" value="5" type="radio" id="130"/><label htmlFor="130"></label>
			based morality on compassion</p>
		    <p className="center-align">hesitant to yell
		      <input name="q27" value="1" type="radio" id="131"/><label htmlFor="131"></label>
		      <input name="q27" value="2" type="radio" id="132"/><label htmlFor="132"></label>
		      <input name="q27" value="3" type="radio" id="133"/><label htmlFor="133"></label>
		      <input name="q27" value="4" type="radio" id="134"/><label htmlFor="134"></label>
		      <input name="q27" value="5" type="radio" id="135"/><label htmlFor="135"></label>
			finds it easy to yell</p>		    
			<p className="center-align">theoretical
		      <input name="q28" value="1" type="radio" id="136"/><label htmlFor="136"></label>
		      <input name="q28" value="2" type="radio" id="137"/><label htmlFor="137"></label>
		      <input name="q28" value="3" type="radio" id="138"/><label htmlFor="138"></label>
		      <input name="q28" value="4" type="radio" id="139"/><label htmlFor="139"></label>
		      <input name="q28" value="5" type="radio" id="140"/><label htmlFor="140"></label>
			empirical</p>
			<p className="center-align">works hard
		      <input name="q29" value="1" type="radio" id="141"/><label htmlFor="141"></label>
		      <input name="q29" value="2" type="radio" id="142"/><label htmlFor="142"></label>
		      <input name="q29" value="3" type="radio" id="143"/><label htmlFor="143"></label>
		      <input name="q29" value="4" type="radio" id="144"/><label htmlFor="144"></label>
		      <input name="q29" value="5" type="radio" id="145"/><label htmlFor="145"></label>
			plays hardr</p>
		    <p className="center">is uncomhtmlFortable with emotion
		      <input name="q30" value="1" type="radio" id="146"/><label htmlFor="146"></label>
		      <input name="q30" value="2" type="radio" id="147"/><label htmlFor="147"></label>
		      <input name="q30" value="3" type="radio" id="148"/><label htmlFor="148"></label>
		      <input name="q30" value="4" type="radio" id="149"/><label htmlFor="149"></label>
		      <input name="q30" value="5" type="radio" id="150"/><label htmlFor="150"></label>
			values emotion</p>
		    <p className="center">likes to perhtmlForm in front of people
		      <input name="q31" value="1" type="radio" id="151"/><label htmlFor="151"></label>
		      <input name="q31" value="2" type="radio" id="152"/><label htmlFor="152"></label>
		      <input name="q31" value="3" type="radio" id="153"/><label htmlFor="153"></label>
		      <input name="q31" value="4" type="radio" id="154"/><label htmlFor="154"></label>
		      <input name="q31" value="5" type="radio" id="155"/><label htmlFor="155"></label>
			avoids public speaking</p>
		    <p className="center">likes to know "who?", "what?", "when?"
		      <input name="q32" value="1" type="radio" id="156"/><label htmlFor="156"></label>
		      <input name="q32" value="2" type="radio" id="157"/><label htmlFor="157"></label>
		      <input name="q32" value="3" type="radio" id="158"/><label htmlFor="158"></label>
		      <input name="q32" value="4" type="radio" id="159"/><label htmlFor="159"></label>
		      <input name="q32" value="5" type="radio" id="160"/><label htmlFor="160"></label>
			likes to know "why?"</p>
			<button>FINISH</button>					
		</htmlForm>					  			  			
		</div>
    );
  }
}

export default Test;
