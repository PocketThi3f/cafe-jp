import React, { Component } from 'react';
import './ImagePanel.scss';
import cafeImg from '../../assets/images/city-cafe.jpg';

export default class ImagePanel extends Component {
    render() {
        return (
        <div className="cafe-image" >
            <img src={cafeImg} alt="cafe shop"/>
        </div>
        )
    }
}