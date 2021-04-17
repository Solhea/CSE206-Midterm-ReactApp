
import React, { useState, useEffect } from "react";
import RandomNumber from "./RandomNumber";
import CheckTheResult from "./CheckTheResult";

const AlertCheck = (ReturnedResult, RandomNumber) => {
  if (ReturnedResult === "+4") {
    alert("Congratulations! The answer is: " + RandomNumber.toString());
  }
};

const GuessGamePage = () => {
  const [randomNumber, setRandomNumber] = useState(() => RandomNumber());
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState("");

  const check = (userNumber) => {
    /* console.log(document.getElementById("UserInput").value)
    console.log(SecretNumber);
    document.getElementById("UserInput").value = "+4"; */
    setCounter(counter + 1);

    setResult(CheckTheResult(userNumber, randomNumber));
  };
  const NewGameSetting = () => {
    setCounter(0);
    setResult("");
    document.getElementById("UserInput").value = "";
  };

  useEffect(() => {
    AlertCheck(result, randomNumber);
  }, [result]);
  useEffect(() => {
    NewGameSetting();
  }, [randomNumber]);

  return (
    <div className="App">
      <header className="App-header">
        
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
        <div>
          Type Your Guess
          <input
            type="text"
            id="UserInput"
            placeholder="Guess The Number"
            name="fname"
          ></input>
        </div>
        <button
          type="button"
          id="GuessEvent"
          onClick={() => {
            check(document.getElementById("UserInput").value);
          }}
        >
          Click Me!{randomNumber}
        </button>
        <div>Number of prediction: {counter}</div>
        <div>Result: {result}</div>
        <button
          type="button"
          id="ReGuessEvent"
          onClick={() => {
            setRandomNumber(() => RandomNumber());
          }}
        >
          Generate New Random Number
        </button>
      </header>
    </div>
  );
};

export default GuessGamePage;