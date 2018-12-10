import React, { Component } from 'react';
import './App.css';
import UserGuess from './userguess'; //creates a new tag <UserGuess>
// import Guess from './Guess.js'; //creates a new tag <Guess>
import UserFeedback from './userfeedback';
// import Feedback from './Feedback';
// import GuessCount from './guesscount';

//app starts everything off (we call it from index, etc)
//anything we want to use as a component has to be referenced in app.js 
//components need to be referenced as completely new tags
class App extends Component {

  render() {
    return (

      <div className="App">
        
        <header className="App-header">
          <h1>Hot or Cold</h1>
          <p>
            Make Your Guess!
          </p> 
        </header>
      
      <form>
        <input type="text" placeholder="Your Guess Here"></input>
        <input type="submit"></input>
      </form>

      {/* <Guess current="Current Guess" recent="Recent Guesses" history="Guess History"/> 
      <Feedback hot="Hot" cold="Cold"/> */}
      
      <UserGuess />
      <UserFeedback hot="Hot" cold="Cold"/>
      {/* <GuessCount /> */}


      </div>
    );
  }
}

export default App;
