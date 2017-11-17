import React, { Component } from 'react';
import PersonalityTypes from './PersonalityTypes/PersonalityTypes.js'
import DisplayPage from './DisplayPage/DisplayPage.js'
import VideoDisplay from './VideoDisplay/VideoDisplay.js'
import Test from './Test.js'

class App extends Component {
  constructor(){
    super();
      this.state = {
        currentType: "",
        currentIndex: "",
        display: [],
        types: [{
              name: "INTJ",
              youtubelink1: "https://www.youtube.com/embed/IPsfPuzImIY&t=1s",
              youtubelink2: "https://www.youtube.com/embed/P_LHDroHyLo&t=15s",
              youtubelink3: "https://www.youtube.com/embed/DpsS9IhZd3s",
              intro: "It’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well. INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering. People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.",
              conclusion: "Few personality types are as mysterious and controversial as INTJs. Possessing intellect and strategic thinking that allow them to overcome many challenging obstacles, INTJs have the ability to both develop and implement a plan for everything, including their own personal growth.  Yet INTJs can be easily tripped up in areas where careful and rational thinking is more of a liability than an asset. Whether it is finding (or keeping) a partner, making friends, reaching dazzling heights on the career ladder or adapting to the unpredictable, INTJs need to put in a conscious effort to develop their weaker traits and additional skills."             
            },{
              name: "INTP",
              youtubelink1: "https://www.youtube.com/embed/VT9wlt7AdAI",
              youtubelink2: "https://www.youtube.com/embed/3t5-NejwxFo",
              youtubelink3: "https://www.youtube.com/embed/1lnQi3lDX4o",
              intro: "The INTP personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for them, as there’s nothing they’d be more unhappy about than being common. INTPs pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, INTPs have been responsible for many scientific discoveries throughout history.",
              conclusion: "INTPs’ intelligence and logical reasoning skills are a force to be reckoned with. Be it a minor debate or a life-changing decision, INTPs will find it easy to entertain multiple ideas and keep a cool head. This allows INTPs to overcome many challenging obstacles – yet they can be easily tripped up in areas where careful and rational thinking is more of a liability than an asset. Whether it is finding (or keeping) a partner, making friends, reaching dazzling heights on the career ladder or learning to make difficult decisions, INTPs need to put in a conscious effort to develop their weaker traits and additional skills."
            },{ 
              name: "ENTJ",
              youtubelink1: "https://www.youtube.com/embed/CJXtG-cGOMs",
              youtubelink2: "https://www.youtube.com/embed/2JcI_pbeDgQ",
              youtubelink3: "https://www.youtube.com/embed/o26b9N46Qpc",
              intro: "ENTJs are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. But unlike their Feeling (F) counterpart, ENTJs are characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they’ve set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have ENTJs to thank for many of the businesses and institutions we take for granted every day.",
              conclusion: "ENTJs’ intelligence, strong will and logical reasoning skills are a force to be reckoned with. Be it a minor obstacle or a seemingly impossible task, ENTJs will find a way – or make one. This fearsome determination and intellect allow ENTJs to overcome many challenges.  Yet ENTJs can be easily tripped up in areas where careful and rational thinking is more of a liability than an asset. Whether it is finding (or keeping) a partner, connecting with other people, reaching dazzling heights on the career ladder or forcing themselves to relax, ENTJs need to put in a conscious effort to develop their weaker traits and additional skills."
            },{
              name: "ENTP",
              youtubelink1: "https://www.youtube.com/embed/zirSwzd0Z4s",
              youtubelink2: "https://www.youtube.com/embed/mdxwa7bP0ts",
              youtubelink3: "https://www.youtube.com/embed/LuJlSjnQwOI",
              intro: "The ENTP personality type is the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. Unlike their more determined Judging (J) counterparts, ENTPs don’t do this because they are trying to achieve some deeper purpose or strategic goal, but for the simple reason that it’s fun. No one loves the process of mental sparring more than ENTPs, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points.",
              conclusion: "ENTPs’ intelligence, curiosity and sound reasoning skills are a force to be reckoned with. ENTPs will always be able to find just the right argument, the weakest chink in their opponent’s armor, or the way out of a seemingly hopeless situation. Their fearsome debate skills and impressive knowledge allow ENTPs to overcome many challenges."
            },{
              name: "INFJ",
              youtubelink1: "https://www.youtube.com/embed/Addv2ALwPvE",
              youtubelink2: "https://www.youtube.com/embed/uJHqS_Jk0_c",
              youtubelink3: "https://www.youtube.com/embed/F71zdrmQuls",
              intro: "The INFJ personality type is very rare, making up less than one percent of the population, but they nonetheless leave their mark on the world. As Diplomats, they have an inborn sense of idealism and morality, but what sets them apart is the accompanying Judging (J) trait – INFJs are not idle dreamers, but people capable of taking concrete steps to realize their goals and make a lasting positive impact.",
              conclusion: "Few personality types are as sensitive and mysterious as INFJs. Your imagination and empathy make you someone who not only cherishes their integrity and deeply held principles but, unlike many other idealistic types, is also capable of turning those ideals into plans, and executing them.  Yet, as an INFJ, you are likely to be easily tripped up in areas where idealism and determination are more of a liability than an asset. Whether it is navigating interpersonal conflicts, confronting unpleasant facts, pursuing self-realization, or finding a career path that aligns well with your intricate inner core, you may face numerous challenges that at times can even make you question who you really are."
            },{
              name: "INFP",
              youtubelink1: "https://www.youtube.com/embed/-XlwQyD2WVQ",
              youtubelink2: "https://www.youtube.com/embed/Eh3vyzri9I4",
              youtubelink3: "https://www.youtube.com/embed/GcVI4DGkRuk",
              intro: "INFP personalities are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, INFPs have an inner flame and passion that can truly shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high for the INFP personality type – but when they find like-minded people to spend their time with, the harmony they feel will be a fountain of joy and inspiration.",
              conclusion: "Few personality types are as poetic and kind-hearted as INFPs. Their altruism and vivid imagination allow INFPs to overcome many challenging obstacles, more often than not brightening the lives of those around them. INFPs’ creativity is invaluable in many areas, including their own personal growth.  Yet INFPs can be easily tripped up in areas where idealism and altruism are more of a liability than an asset. Whether it is finding (or keeping) a partner, making friends, reaching dazzling heights on the career ladder or planning for the future, INFPs need to put in a conscious effort to develop their weaker traits and additional skills."
            },{
              name: "ENFP",
              youtubelink1: "https://www.youtube.com/embed/cFxqT61_6D8",
              youtubelink2: "https://www.youtube.com/embed/xMHdL05QMk8",
              youtubelink3: "https://www.youtube.com/embed/ieVlCLhAsiY",
              intro: "The ENFP personality is a true free spirit. They are often the life of the party, but unlike Explorers, they are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others. Charming, independent, energetic and compassionate, the 7% of the population that they comprise can certainly be felt in any crowd.",
              conclusion: "Few personality types are as creative and charismatic as ENFPs. Known for their idealism and enthusiasm, ENFPs are good at dealing with unexpected challenges and brightening the lives of those around them. ENFPs’ imagination is invaluable in many areas, including their own personal growth."
            },{
              name: "ENFJ",
              youtubelink1: "https://www.youtube.com/embed/6gicc2DiNeY",
              youtubelink2: "https://www.youtube.com/embed/XcrQBKncaJc",
              youtubelink3: "https://www.youtube.com/embed/XBd0jEyFF9s",
              intro: "ENFJs are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, ENFJs take a great deal of pride and joy in guiding others to work together to improve themselves and their community.",
              conclusion: "Few personality types are as inspiring and charismatic as ENFJs. Their idealism and vision allow ENFJs to overcome many challenging obstacles, more often than not brightening the lives of those around them. ENFJs’ imagination is invaluable in many areas, including their own personal growth.  Yet ENFJs can be easily tripped up in areas where idealism and altruism are more of a liability than an asset. Whether it is finding (or keeping) a partner, staying calm under pressure, reaching dazzling heights on the career ladder or making difficult decisions, ENFJs need to put in a conscious effort to develop their weaker traits and additional skills."                           
            },{
              name: "ISTJ",
              youtubelink1: "https://www.youtube.com/embed/uIjNmQGd_sY",
              youtubelink2: "https://www.youtube.com/embed/7jgCtOmuWJg",
              youtubelink3: "https://www.youtube.com/embed/uA2VzBVAQA0",
              intro: "The ISTJ personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make ISTJs a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the ISTJ personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, ISTJs hold back none of their time and energy completing each relevant task with accuracy and patience.",
              conclusion: "Few personality types are as practical and dedicated as ISTJs. Known for their reliability and hard work, ISTJs are good at creating and maintaining a secure and stable environment for themselves and their loved ones. ISTJs’ dedication is invaluable in many areas, including their own personal growth."
              
            },{
              name: "ISFJ",
              youtubelink1: "https://www.youtube.com/embed/V3x_DQhermw",
              youtubelink2: "https://www.youtube.com/embed/4NLjXSyYN6M",
              youtubelink3: "https://www.youtube.com/embed/egOQq6FnPuI",
              intro: "The ISFJ personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though possessing the Feeling (F) trait, ISFJs have excellent analytical abilities; though Introverted (I), they have well-developed people skills and robust social relationships; and though they are a Judging (J) type, ISFJs are often receptive to change and new ideas. As with so many things, people with the ISFJ personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.",
              conclusion: "Few personality types are as practical and dedicated as ISFJs. Known for their reliability and altruism, ISFJs are good at creating and maintaining a secure and stable environment for themselves and their loved ones. ISFJs’ dedication is invaluable in many areas, including their own personal growth. Yet ISFJs can be easily tripped up in areas where their kindness and practical approach are more of a liability than an asset. Whether it is finding (or keeping) a partner, learning to relax or improvise, reaching dazzling heights on the career ladder, or managing their workload, ISFJs need to put in a conscious effort to develop their weaker traits and additional skills."
            },{
              name: "ESTJ",
              youtubelink1: "https://www.youtube.com/embed/uVPWPsxYGBo",
              youtubelink2: "https://www.youtube.com/embed/W0YgTKyjnO8",
              youtubelink3: "https://www.youtube.com/embed/YfVfK8kPiYs",
              intro: "ESTJs are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the ESTJ personality type are valued for their clear advice and guidance, and they happily lead the way on difficult paths. Taking pride in bringing people together, ESTJs often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together.",
              conclusion:"Few personality types are as practical and strong-willed as ESTJs. Known for their reliability and administrative skills, ESTJs are good at creating and maintaining a secure and stable environment for themselves and their loved ones. ESTJs’ dedication is invaluable in many areas, including their own personal growth.  Yet ESTJs can be easily tripped up in areas where their rational and practical approach is more of a liability than an asset. Whether it is finding (or keeping) a partner, learning to relax or improvise, reaching dazzling heights on the career ladder, or managing their workload, ESTJs need to put in a conscious effort to develop their weaker traits and additional skills."
            },{
              name: "ESFJ",
              youtubelink1: "https://www.youtube.com/embed/vzuTeWUoZq4",
              youtubelink2: "https://www.youtube.com/embed/XIDcfhXyHxM",
              youtubelink3: "https://www.youtube.com/embed/l4RRvP_GSSo",
              intro: "People who share the ESFJ personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, ESFJs are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, ESFJs continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.",
              conclusion: "Few personality types are as practical and caring as ESFJs. Known for their social and administrative skills, ESFJs are good at creating and maintaining a secure, stable and friendly environment for themselves and their loved ones. ESFJs’ dedication is invaluable in many areas, including their own personal growth.  Yet ESFJs can be easily tripped up in areas where their kindness and practical approach are more of a liability than an asset. Whether it is finding (or keeping) a partner, learning to relax or improvise, reaching dazzling heights on the career ladder, or managing their workload, ESFJs need to put in a conscious effort to develop their weaker traits and additional skills."  
            },{
              name: "ISTP",
              youtubelink1: "https://www.youtube.com/embed/5bZEkogYONY",
              youtubelink2: "https://www.youtube.com/embed/oLZqsUD9GiE",
              youtubelink3: "https://www.youtube.com/embed/yp7Gxy4XXfk",
              intro: "ISTPs love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, ISTPs find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.",
              conclusion: "Few personality types are as bold and practical as ISTPs. Known for their technical mastery and willingness to improvise, ISTPs are good at finding unique solutions to seemingly impossible challenges. ISTPs’ desire to explore and learn new things is invaluable in many areas, including their own personal growth."
            },{
              name: "ISFP",
              youtubelink1: "https://www.youtube.com/embed/Av0L9olZdco",
              youtubelink2: "https://www.youtube.com/embed/1yZz-FSqwWg",
              youtubelink3: "https://www.youtube.com/embed/MTwFd4oYwic",
              intro: "ISFP personality types are true artists, but not necessarily in the typical sense where they’re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it’s that they use aesthetics, design and even their choices and actions to push the limits of social convention. ISFPs enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they’ve expressed more than once the phrase 'Don’t box me in!'",
              conclusion: "Few personality types are as colorful and charming as ISFPs. Known for their kindness and artistic skills, ISFPs are great at finding exciting new things to explore and experience. ISFPs’ creativity and down-to-earth attitude are invaluable in many areas, including their own personal growth."
            },{
              name: "ESTP",
              youtubelink1: "https://www.youtube.com/embed/-AOLm6WF3SM",
              youtubelink2: "https://www.youtube.com/embed/f5P6MnpVgvQ",
              youtubelink3: "https://www.youtube.com/embed/6ZT8a7IiNoE",
              intro: "ESTP personality types always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, ESTP personalities love to be the center of attention. If an audience member is asked to come on stage, ESTPs volunteer – or volunteer a shy friend.  Theory, abstract concepts and plodding discussions about global issues and their implications don’t keep ESTPs interested for long. ESTPs keep their conversation energetic, with a good dose of intelligence, but they like to talk about what is – or better yet, to just go out and do it. ESTPs leap before they look, fixing their mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.",
              conclusion: "Few personality types are as charming and attractive as ESTPs. Known for their ability to improvise and focus completely on the present, ESTPs are great at finding exciting new things to explore and experience. ESTPs’ creativity and down-to-earth attitude are invaluable in many areas, including their own personal growth."
            },{
              name: "ESFP",
              youtubelink1: "https://www.youtube.com/embed/ToN4uSCYNG4",
              youtubelink2: "https://www.youtube.com/embed/rg4E63gmmgw",
              youtubelink3: "https://www.youtube.com/embed/O5emFi1dbl8",
              intro: "If anyone is to be found spontaneously breaking into song and dance, it is the ESFP personality type. ESFPs get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as ESFPs when it comes to encouraging others, and no other personality type does it with such irresistible style.",
              conclusion: "Few personality types are as charming and attractive as ESFPs. Known for their ability to improvise and focus completely on the present, ESFPs are great at finding exciting new things to explore and experience. ESFPs’ energy, enthusiasm and down-to-earth attitude are invaluable in many areas, including their own personal growth."                
            }]
      }

  }
  containerCurrentType = (selectedType) => {
    const state = this.state;
    state.currentType = selectedType;
    this.setState(state);
    for(let i = 0; i < state.types.length; i++){
      if(state.currentType === state.types[i].name){
        state.currentIndex = i;
      }
    }
    state.display = state.types[state.currentIndex];
    this.setState(state);
    console.log(state)
  }

  render() {
    return (
      <div className='row'>
        <PersonalityTypes containerCurrentType={this.containerCurrentType}/>
        <DisplayPage display={this.state.display} types={this.state.types} currentType={this.state.currentType} currentIndex={this.state.currentIndex}/>
        <VideoDisplay display={this.state.display} types={this.state.types} currentType={this.state.currentType}/>
        <Test/>
      </div>
    );
  }
}

export default App;
