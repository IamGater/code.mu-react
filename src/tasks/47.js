import "./App.css";

import React, { useState } from "react";

function App47() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Показать абзац
      </label>

      {isChecked && <p>Этот абзац видим, когда чекбокс отмечен.</p>}
    </div>
  );
}

export default App47;
