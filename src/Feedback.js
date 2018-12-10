import React from 'react';


export default function Feedback(props) {
    return (
      <div className="feedback">
        <div className="hot-guess">{ props.hot }</div>
        <div className="cold-guess"> { props.cold } </div>
      </div>
    )
  }