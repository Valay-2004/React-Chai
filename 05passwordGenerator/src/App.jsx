import { useCallback, useState } from 'react';
import './App.css';

function App() {

  const [length, setLength] = useState(0);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "~!@#$%^&*()_+{[]}|<>/`";
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
    <p hidden style={{textAlign: 'center', marginTop: 10}}>Valay is Here </p>
    <h1 className='text-4xl text-center text-black'>Password Generator</h1>
    </>
  )
}

export default App;
