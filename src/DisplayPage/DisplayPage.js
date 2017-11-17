import React, { Component } from 'react';
import './DisplayPage.css';


class DisplayPage extends Component {
	constructor(){
		super();

							
			
	}
	


	render() {

		const p = this.props.types.map((item, i) => {
			return <h1 key={i}>{item.name}</h1>
		})


    return (
      <div id="display" className="col s6 fixed">
{p}
      <h3> HI </h3>
      <p>INTP PERSONALITY (“THE LOGICIAN”)

Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.
Albert Einstein
The INTP personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for them, as there’s nothing they’d be more unhappy about than being "common". INTPs pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, INTPs have been responsible for many scientific discoveries throughout history.

The Unexamined Life Is Not Worth Living

INTPs are known for their brilliant theories and unrelenting logic – in fact, they are considered the most logically precise of all the personality types.
They love patterns, and spotting discrepancies between statements could almost be described as a hobby, making it a bad idea to lie to an INTP. This makes it ironic that INTPs’ word should always be taken with a grain of salt – it’s not that they are dishonest, but people with the INTP personality type tend to share thoughts that are not fully developed, using others as a sounding board for ideas and theories in a debate against themselves rather than as actual conversation partners.

This may make them appear unreliable, but in reality no one is more enthusiastic and capable of spotting a problem, drilling through the endless factors and details that encompass the issue and developing a unique and viable solution than INTPs – just don’t expect punctual progress reports. People who share the INTP personality type aren’t interested in practical, day-to-day activities and maintenance, but when they find an environment where their creative genius and potential can be expressed, there is no limit to the time and energy INTPs will expend in developing an insightful and unbiased solution.

INTP personality
Wisdom Begins in Wonder

They may appear to drift about in an unending daydream, but INTPs’ thought process is unceasing, and their minds buzz with ideas from the moment they wake up. This constant thinking can have the effect of making them look pensive and detached, as they are often conducting full-fledged debates in their own heads, but really INTPs are quite relaxed and friendly when they are with people they know, or who share their interests. However, this can be replaced by overwhelming shyness when INTP personalities are among unfamiliar faces, and friendly banter can quickly become combative if they believe their logical conclusions or theories are being criticized.

When INTPs are particularly excited, the conversation can border on incoherence as they try to explain the daisy-chain of logical conclusions that led to the formation of their latest idea. Oftentimes, INTPs will opt to simply move on from a topic before it’s ever understood what they were trying to say, rather than try to lay things out in plain terms.

The reverse can also be true when people explain their thought processes to INTPs in terms of subjectivity and feeling. Imagine an immensely complicated clockwork, taking in every fact and idea possible, processing them with a heavy dose of creative reasoning and returning the most logically sound results available – this is how the INTP mind works, and this type has little tolerance for an emotional monkey-wrench jamming their machines.

Let Those Who Would Move the World First Move Themselves

Further, with Thinking (T) as one of their governing traits, INTPs are unlikely to understand emotional complaints at all, and their friends won’t find a bedrock of emotional support in them. People with the INTP personality type would much rather make a series of logical suggestions for how to resolve the underlying issue, a perspective that is not always welcomed by their Feeling (F) companions. This will likely extend to most social conventions and goals as well, like planning dinners and getting married, as INTPs are far more concerned with originality and efficient results.

The one thing that really holds INTPs back is their restless and pervasive fear of failure. INTP personalities are so prone to reassessing their own thoughts and theories, worrying that they’ve missed some critical piece of the puzzle, that they can stagnate, lost in an intangible world where their thoughts are never truly applied. Overcoming this self-doubt stands as the greatest challenge INTPs are likely to face, but the intellectual gifts – big and small – bestowed on the world when they do makes it worth the fight.</p>
        	
      </div>
    );
  }
}

export default DisplayPage;