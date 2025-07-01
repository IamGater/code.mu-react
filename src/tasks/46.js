import "./App.css";

import { useState } from "react";

function App46() {
  const [isAdult, setIsAdult] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAdult}
          onChange={(e) => setIsAdult(e.target.checked)}
        />
        Мне уже есть 18 лет
      </label>

      {isAdult ? (
        <div>
          <h2>Ура, вам уже есть 18</h2>
          <p>здесь расположен контент только для взрослых</p>
        </div>
      ) : (
        <div>
          <p>увы, вам еще нет 18 лет</p>
        </div>
      )}
    </div>
  );
}

export default App46;
