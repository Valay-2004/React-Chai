import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    // console.log(`Value Added ${Math.floor(Math.random()*3)}`);
    console.log("added at", counter);
    counter += 1;
    setCounter(counter);
  };

  const remValue = () => {
    console.log("removed at", counter);
    counter -= 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>
        Valay <sub>do</sub> react
      </h1>
      <h2>Counter is {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={remValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
