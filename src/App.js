import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import RandomNumber from "./RandomNumber";
import CheckTheResult from "./CheckTheResult";

const AlertCheck = (abc) => {
  if (abc === "+4") {
    alert("You win");
  }
}

const App = () => {
  const [randomNumber] = useState(() => RandomNumber());
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState("");

  const check = (userNumber) => {
    /* console.log(document.getElementById("UserInput").value)
    console.log(SecretNumber);
    document.getElementById("UserInput").value = "+4"; */
    setCounter(counter + 1);
    var ReturnedResult  = CheckTheResult(userNumber, randomNumber) 
    setResult(ReturnedResult)
    
    AlertCheck(ReturnedResult)
    

    
  };

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
        <input
          type="text"
          id="UserInput"
          placeholder="Guess The Number"
          name="fname"
        ></input>
        <button
          type="button"
          id="GuessEvent"
          onClick={() => {
            check(document.getElementById("UserInput").value) 
            ;
          }}
        >
          Click Me!{randomNumber}
        </button>
        <div>Number of prediction: {counter}</div>
        <div>Result: {result}</div>
      </header>
    </div>
  );
};

export default App;
