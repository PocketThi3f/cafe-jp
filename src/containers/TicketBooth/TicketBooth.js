import React, { Component } from 'react';
import './TicketBooth.scss';

// Import Clock file
import Ticket from './Ticket/Ticket';


export default class TicketBooth extends Component {
    render() {
        return (
            <Ticket />
        )
    }
}