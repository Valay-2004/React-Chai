import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="flex bg-green-400 p-4 rounded-xl shadow-lg text-black mb-5">
        Tailwind CSS
      </h1>
      <Card username="Valay"/>
      <Card username="Rupal"/>
    </>
  );
}

export default App;
