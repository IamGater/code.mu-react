import "./App.css";

import React, { useState } from "react";

function App33() {
  const [age, setAge] = useState(30);

  const increaseAge = () => {
    setAge((prev) => prev + 1);
  };

  const decreaseAge = () => {
    setAge((prev) => prev - 1);
  };

  return (
    <div>
      <p>age: {age}</p>
      <button onClick={increaseAge}>high</button>
      <button onClick={decreaseAge}>low</button>
    </div>
  );
}

export default App33;
