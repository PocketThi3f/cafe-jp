import React, { Component } from 'react';
import cafeImg from '../../assets/images/city-cafe.jpg';

export default class ImagePanel extends Component {
    render() {
        return <img src={cafeImg} alt="cafe table"/>;
    }
}