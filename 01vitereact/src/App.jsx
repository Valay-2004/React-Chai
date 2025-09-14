import { useState } from "react";
import Sample from "./sample";
import Counter from "./random";

// creating variable for the functions also known as evaluated expressions
const username = "Valay";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <Sample />
    <div>
      <h1>This is not a drill run away now...</h1>
      <sub>pong pong</sub>
      <h2>This is brought to you by {username}</h2>
    </div>
    <Counter />
    </>
  );
}

export default App;
