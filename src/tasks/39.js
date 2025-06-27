import "./App.css";

import React, { useState } from "react";

function App39() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const sum = () => {
    setResult(Number(a) + Number(b));
  };

  const multiply = () => {
    setResult(Number(a) * Number(b));
  };

  return (
    <div>
      <input value={a} onChange={(e) => setA(e.target.value)} />
      <input value={b} onChange={(e) => setB(e.target.value)} />
      <button onClick={sum}>Sum</button>
      <button onClick={multiply}>Multiply</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App39;
