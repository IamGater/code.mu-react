import "./App.css";

import React, { useState } from "react";

function App38() {
  const [nums, setNums] = useState(Array(5).fill(""));

  const avg =
    nums
      .map(Number)
      .filter((n) => !isNaN(n))
      .reduce((a, b) => a + b, 0) / nums.filter((n) => n !== "").length || "";

  return (
    <div>
      {nums.map((n, i) => (
        <input
          key={i}
          value={n}
          onChange={(e) => {
            const copy = [...nums];
            copy[i] = e.target.value;
            setNums(copy);
          }}
        />
      ))}
      <p>{avg && `Среднее: ${avg.toFixed(2)}`}</p>
    </div>
  );
}

export default App38;
