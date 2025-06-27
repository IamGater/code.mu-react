import "./App.css";

import { useState } from "react";

function App37() {
  const [f, setF] = useState("");

  return (
    <div>
      <input
        value={f}
        onChange={(e) => setF(e.target.value)}
        placeholder="Фаренгейт"
      />
      <p>{f && `Цельсий: ${(((f - 32) * 5) / 9).toFixed(2)}`}</p>
    </div>
  );
}

export default App37;
