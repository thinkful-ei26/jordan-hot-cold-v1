import React from 'react';

export default function Guess(props) {
//   console.log(props)
  return (
    <div className="guesses">
      <div className="current-guess">Current Guess: { props.currentGuess } </div>
      <div className="recent-guess">Recent Guess: { props.recentGuess }</div>
      <div className="history-guess">Guess History: { props.history } </div>
    </div>
  )
}