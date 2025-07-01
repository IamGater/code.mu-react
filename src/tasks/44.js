import "./App.css";

import { useState } from "react";

function App44() {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");

  return (
    <div>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
      <button onClick={() => setText(checked ? "Привет" : "Пока")}>ОК</button>
      <p>{text}</p>
    </div>
  );
}

export default App44;
