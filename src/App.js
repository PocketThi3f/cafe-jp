import React, { Component } from 'react';
import Header from './containers/Header/Header';
import ImagePanel from './components/ImagePanel/ImagePanel';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImagePanel />
      </div>
    )
  }
}

export default App;
