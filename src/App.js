import React, { Component } from 'react';

// Container Imports
import Header from './containers/Header/Header';
import ImagePanel from './components/ImagePanel/ImagePanel';
import Clock from './containers/ClockPanel/ClockPanel';
import TicketBooth from './containers/TicketBooth/TicketBooth';
import Footer from './containers/Footer/Footer';

// Sass file for App
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImagePanel />
        <Clock />
        <TicketBooth />
        <Footer />
      </div>
    )
  }
}

export default App;
