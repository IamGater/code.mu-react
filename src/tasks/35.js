import "./App.css";

import React, { useState } from "react";

function App35() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text.length}</p>
    </div>
  );
}

export default App35;
