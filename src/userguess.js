import React from 'react';
import Guess from './Guess';
import UserFeedback from './userfeedback';

export default function Guesses() {
    const guessData = [
        {currentGuess: 10, recentGuess: 5, allGuesses: <li>2, 7, 12</li>}
    ];

    const userGuess = guessData.map(guess => (
        <li>
            <Guess 
            currentGuess={guess.currentGuess} 
            recentGuess={guess.recentGuess}
            history={guess.allGuesses} />
            </li>
    ));
    return <ul>{userGuess}</ul>
}


 {/* <p>Recent Guesses: {guess.recentGuess}</p> 
            <p>All Guesses: {guess.history}</p> */}