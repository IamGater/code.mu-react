import "./App.css";

import { useState } from "react";

function App45() {
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);

  return (
    <div>
      <label>
        <input type="checkbox" onChange={(e) => setHtml(e.target.checked)} />
        HTML
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={(e) => setCss(e.target.checked)} />
        CSS
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={(e) => setJs(e.target.checked)} />
        JavaScript
      </label>
      <p>HTML: {html ? "Да" : "Нет"}</p>
      <p>CSS: {css ? "Да" : "Нет"}</p>
      <p>JS: {js ? "Да" : "Нет"}</p>
    </div>
  );
}

export default App45;
