import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  const [head, setHead] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      // setResult(eval(result).toString());
      setHead(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <>
        <h1>React Calculator</h1>
      <div className="container">
        <form id="display">
          <input type="text" value={head} id="head"></input>
          <input id="tail" type="text" value={result}></input>
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            AC
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button
            id="divide"
            className="highlight"
            name="/"
            onClick={handleClick}
          >
            &divide;
          </button>
          <button id="seven" name="7" onClick={handleClick}>
            7
          </button>
          <button id="eight" name="8" onClick={handleClick}>
            8
          </button>
          <button id="nine" name="9" onClick={handleClick}>
            9
          </button>
          <button
            id="multiply"
            className="highlight"
            name="*"
            onClick={handleClick}
          >
            &times;
          </button>
          <button id="four" name="4" onClick={handleClick}>
            4
          </button>
          <button id="five" name="5" onClick={handleClick}>
            5
          </button>
          <button id="six" name="6" onClick={handleClick}>
            6
          </button>
          <button
            id="subtract"
            className="highlight"
            name="-"
            onClick={handleClick}
          >
            &ndash;
          </button>
          <button id="one" name="1" onClick={handleClick}>
            1
          </button>
          <button id="two" name="2" onClick={handleClick}>
            2
          </button>
          <button id="three" name="3" onClick={handleClick}>
            3
          </button>
          <button id="add" className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button id="decimal" name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={calculate} id="equals">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
