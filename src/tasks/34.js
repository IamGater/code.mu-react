import "./App.css";

import React, { useState } from "react";

function App34() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
      />
      <p>first: {text1}</p>

      <input
        type="text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
      <p>second: {text2}</p>
    </div>
  );
}

export default App34;
