import React, { Component } from 'react';
import './ClockPanel.scss';

// Import Clock file
import Clock from './Clock/Clock';


export default class ClockPanel extends Component {
    render() {
        return (
            <Clock />
        )
    }
}