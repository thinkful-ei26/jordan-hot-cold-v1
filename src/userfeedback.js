import React from 'react';
import Feedback from './Feedback';

export default function FeedbackOptions(props) {
    // const feedbackData = [
    //     {hot: "hot", id: 1},
    //     {cold: "cold", id: 2},
    // ];

    const userFeedback =
        <li>
            <Feedback hot={props.hot} cold={props.cold}/>
            </li>;
    return <ul>{userFeedback}</ul>
}
