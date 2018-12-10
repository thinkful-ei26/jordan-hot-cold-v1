import React from 'react';
import Guess from './Guess';

export default function Guesses() {
    const guessData = [
        {currentGuess: 10, 
         recentGuess: 5, 
         allGuesses: <li>2, 7, 12</li>, 
         guessCount: function(){return this.guessData.allGuesses.length}
        }
    ];

    // const guessCount = guessData.allGuesses.length;

    const userGuess = guessData.map(guess => (
        <li>
            <Guess 
            currentGuess={guess.currentGuess} 
            recentGuess={guess.recentGuess}
            history={guess.allGuesses}
            count={guess.guessCount} />
            </li>
    ));
    return <ul>{userGuess}</ul>
}