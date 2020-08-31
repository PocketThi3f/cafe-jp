import React, { Component } from 'react';
import './ClockPanel.scss';


export default class ClockPanel extends Component {
    render() {
        return (
            <div className="clock-section">
                <p>Current Time is:</p>
                <h3>12:30 PM PST</h3>
            </div>
        )
    }
}