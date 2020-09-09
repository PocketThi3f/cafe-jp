import React, { Component } from 'react';
import './Ticket.scss';

export default class Ticket extends Component {
    render() {
        return (
            <div className="ticket-status">
                <p>This ticket will update you on the status of your order.</p>
                <p>Approximate wait time...</p>
                <strong><p>5 minutes</p></strong>
                <p>ETA:<strong> 12:35 PM PST</strong></p>
            </div>
        )
    }
}