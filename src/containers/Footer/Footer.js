import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p className="footer-item">LinkedIn</p>
                <p className="footer-item">Github</p>
            </div>
        )
    }
}