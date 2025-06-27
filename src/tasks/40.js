import "./App.css";

import React, { useState } from "react";

function App40() {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [diff, setDiff] = useState("");

  const calculateDiff = () => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const timeDiff = Math.abs(d2 - d1);
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDiff(dayDiff);
  };

  return (
    <div>
      <input
        type="date"
        value={date1}
        onChange={(e) => setDate1(e.target.value)}
      />
      <input
        type="date"
        value={date2}
        onChange={(e) => setDate2(e.target.value)}
      />
      <button onClick={calculateDiff}>Calculate</button>
      <p>Result: {diff && `${diff}`}</p>
    </div>
  );
}

export default App40;
