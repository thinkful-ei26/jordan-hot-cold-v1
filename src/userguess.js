import React from 'react';
import Guess from './Guess';

export default function Guesses() {
    const guessData = [
        {currentGuess: 10, recentGuess: 5, history: [2, 7, 12]},
        {currentGuess: 20, recentGuess: 15, history: [3, 8, 14]},
        {currentGuess: 30, recentGuess: 25, history: [4, 9, 16]}
    ];

    const userGuess = guessData.map(guess => (
        <li><Guess current={guess.currentGuess} recent={guess.recentGuess} history={guess.history}/></li>
    ));
    return <ul>{userGuess}</ul>
}
