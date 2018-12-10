import React from 'react';


export default function Feedback(props) {
    // console.log(props);
    return (
      <div className="feedback">
        <div className="hot-guess">Your guess is: { props.hot }</div>
        <div className="cold-guess">Your guess is: { props.cold } </div>
      </div>
    )
  }