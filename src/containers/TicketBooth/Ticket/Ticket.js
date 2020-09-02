import React, { Component } from 'react';
import './Ticket.scss';

export default class TicketBooth extends Component {
    render() {
        return (
            <div>
                <p>This ticket will update you on the status of your order.</p>
                <p>Approximate wait time...</p>
                <strong><p>5 minutes</p></strong>
            </div>
        )
    }
}