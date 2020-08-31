import React, { Component } from 'react';

// Container Imports
import Header from './containers/Header/Header';
import ImagePanel from './components/ImagePanel/ImagePanel';
import Clock from './containers/ClockPanel/ClockPanel';

// Sass file for App
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImagePanel />
        <Clock />
      </div>
    )
  }
}

export default App;
