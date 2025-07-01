import "./App.css";

import { useState } from "react";

function App50() {
  const ageGroups = [
    "от 0 до 12 лет",
    "от 13 до 17 лет",
    "от 18 до 25 лет",
    "старше 25 лет",
  ];

  const [group, setGroup] = useState("");

  return (
    <>
      <select onChange={(e) => setGroup(e.target.value)}>
        <option value="">Выберите возрастную группу</option>
        {ageGroups.map((g, i) => (
          <option key={i} value={g}>
            {g}
          </option>
        ))}
      </select>

      <p>Вы выбрали: {group || "ничего не выбрано"}</p>
    </>
  );
}

export default App50;
