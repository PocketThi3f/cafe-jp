import React, { Component } from 'react';
import './Clock.scss';


export default class Clock extends Component {
    render() {
        return (
            <div className="clock-section">
                <p>Current Time is:</p>
                <h3>12:30 PM PST</h3>
            </div>
        )
    }
}