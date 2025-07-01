import "./App.css";

import { useState } from "react";

function App48() {
  const [city, setCity] = useState("");

  return (
    <>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">Выберите город</option>
        <option value="Киев">Киев</option>
        <option value="Львов">Львов</option>
        <option value="Одесса">Одесса</option>
      </select>

      <p>Вы выбрали: {city || "ничего не выбрано"}</p>
    </>
  );
}

export default App48;
