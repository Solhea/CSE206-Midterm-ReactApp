import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RandomNumber from "./RandomNumber"



const App = () => {
  
  const [randomNumber, setRandomNumber] = useState(() =>RandomNumber());
  const [guessedNumber, setGuessedNumber] = useState(0)
  const [result, setResult] = useState(0)

  function deneme(SecretNumber){
    console.log(document.getElementById("UserInput").value)
    console.log(SecretNumber);
    document.getElementById("UserInput").value = "+4";
   
  }
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input  type="text" id="UserInput" placeholder="Guess The Number" name="fname"></input> 
        <button type="button" id="GuessEvent" onClick={() =>{deneme(randomNumber)}} >Click Me!</button>
      </header>
    </div>
  );
}

export default App;
