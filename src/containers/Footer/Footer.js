import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>Social Links</p>
                <div className="footer-item">LinkedIn</div>
                <div className="footer-item">Github</div>
            </div>
        )
    }
}