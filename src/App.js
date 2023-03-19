import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const getMachineIdIp = async() => {
    const startTime = Date.now();
    await fetch("http://127.0.0.1:8108/machine", {
        method: "GET",
        // mode:"no-cors",
        keepalive: false,
        headers: {
            'Connection': 'close'
        }
    })
        .then((data)=>{return data})
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err)});
    const msElapsed = Date.now() - startTime;
    console.log(`Async function took ${msElapsed} ms to complete.`);
};

const getMachineIdLocalhost = async() => {
    const startTime = Date.now();
    await fetch("http://localhost:8108/machine", {
        method: "GET",
        // mode: "no-cors",
        keepalive: false,
        headers: {
            'Connection': 'close'
        }
    })
        .then((data)=>{return data})
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err)});
    const msElapsed = Date.now() - startTime;
    console.log(`Async function took ${msElapsed} ms to complete.`);
};

const handleSubmit = (e) => {
    e.preventDefault();
    getMachineIdIp();
};

const handleSubmitLocalhost = (e) => {
    e.preventDefault();
    getMachineIdLocalhost();
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Electron = <span role="img" aria-label="love">😍</span></h2>
        </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">Use 127.0.0.1</button>
          <button type="submit" onClick={handleSubmitLocalhost} className="btn btn-primary">Use localhost</button>
      </div>
    );
  }
}

export default App;
