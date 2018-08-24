import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    for(var x = 0; x < 20; x++){
      console.log(x, "John is awesome")
    }
    const myName = "John";
    const myLastName = <h2>Wood</h2>;
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">John Wood</h1>
        </header>
        <h2>{myName}</h2>
        {myLastName}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>This works!</h2>
      </div>
    );
  }
}

export default App;
