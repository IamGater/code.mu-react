import "./App.css";

import { useState } from "react";

function App42() {
  const [text, setText] = useState("");

  const translit = (str) =>
    str.replace(/[А-яёЁ]/g, (char) => {
      const map = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
      };
      const lower = char.toLowerCase();
      const isUpper = char !== lower;
      const tr = map[lower] || char;
      return isUpper ? tr.charAt(0).toUpperCase() + tr.slice(1) : tr;
    });

  return (
    <div>
      <textarea onChange={(e) => setText(e.target.value)} />
      <p>{translit(text)}</p>
    </div>
  );
}

export default App42;
