import "./App.css";

import React, { useState } from "react";

function App36() {
  const [age, setAge] = useState("");
  const year = new Date().getFullYear();

  return (
    <div>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <p>{age && `Year: ${year - age}`}</p>
    </div>
  );
}

export default App36;
