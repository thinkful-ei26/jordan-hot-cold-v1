import React from 'react';
import Feedback from './Feedback';

export default function FeedbackOptions() {
    const feedbackData = [
        {hot: "hot"},
        {cold: "cold"},s
    ];

    const userFeedback = feedbackData.map(guess => (
        <li><Feedback hot={guess.hot} cold={guess.cold}/></li>
    ));
    return <ul>{userFeedback}</ul>
}
