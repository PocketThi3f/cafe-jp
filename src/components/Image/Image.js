import React, { Component } from 'react';
import './Image.scss';
import cafeImg from '../../assets/images/city-cafe.jpg';

export default class Image extends Component {
    render() {
        return (
        <>
            <div className="cafe-image">
                <img src={cafeImg} alt="coffee shop"/>
                <div className="intro-blurb">
                    <h2>Welcome to Café JP</h2>
                    <p>We are currently:</p>
                    <h3>OPEN!</h3>
                </div>
            </div>
        </>
        )
    }
}