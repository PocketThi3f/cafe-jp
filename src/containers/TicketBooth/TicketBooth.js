import React, { Component } from 'react';
import './TicketBooth.scss';

// Import Clock file
import Ticket from './Ticket/Ticket';


export default class TicketBooth extends Component {
    render() {
        return (
            <div className="ticket-booth">
                <h2>Click Below to Start Order!</h2>
                <button id="ticket-btn" type="submit">Start Order</button>
                <Ticket />
            </div>
        )
    }
}