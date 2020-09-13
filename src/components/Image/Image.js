import React, { Component } from 'react';
import './Image.scss';
import cafeImg from '../../assets/images/city-cafe.jpg';

export default class Image extends Component {
    render() {
        return (
            <div className="cafe-image">
                <img src={cafeImg} alt="cafe shop"/>
            </div>
        )
    }
}