import React, { Component } from 'react';
import './App.css';
import RowContainer from './rowComponent.js';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header text-center">
          <h1 className="App-title mt-5">Mockups React</h1>
        </header>
        <section>
        <div className="container mt-3 mr-1 ml-3">
          <RowContainer />
          <RowContainer />
          <RowContainer />
        </div>
        </section>
      </div>
    );
  }
}

export default App;
