import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 15;

  const addValue = () => {
    // console.log(`Value Added ${Math.floor(Math.random()*3)}`);
    console.log("clicked", counter);
    counter += 1;
  };

  return (
    <>
      <h1>
        Valay <sub>do</sub> react
      </h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button>Remove Value {counter}</button>
    </>
  );
}

export default App;
