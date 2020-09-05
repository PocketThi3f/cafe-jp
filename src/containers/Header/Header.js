import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="nav">
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Order Status</div>
                    <div className="nav-item">Ticket Booth</div>
                </div>
                <div className="Intro">
                    <h1>Welcome to Café JP</h1>
                    <p>We are currently:</p>
                    <h2>OPEN!</h2>
                </div>
            </div>
        )
    }
}