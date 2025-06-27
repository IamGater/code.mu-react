import "./App.css";

import React, { useState } from "react";

function App29() {
  const [name, setName] = useState("user1");
  const [surn, setSurn] = useState("surn1");
  const [age, setAge] = useState(30);

  return (
    <div>
      <p>{name}</p>
      <p>{surn}</p>
      <p>{age}</p>
    </div>
  );
}

export default App29;
