import "./App.css";

import { useState } from "react";

function App49() {
  const cities = ["Киев", "Львов", "Одесса", "Харьков", "Днепр"];
  const [city, setCity] = useState("");

  return (
    <>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">Выберите город</option>
        {cities.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </select>

      <p>Вы выбрали: {city || "ничего не выбрано"}</p>
    </>
  );
}

export default App49;
