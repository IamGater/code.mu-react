import "./App.css";

import React, { useState } from "react";

function App30() {
  const [name, setName] = useState("user1");
  const [surn, setSurn] = useState("surn1");

  const changeName = () => {
    setName("newName");
  };

  const changeSurn = () => {
    setSurn("newSurn");
  };

  return (
    <div>
      <h2>Users</h2>
      <p>Name: {name}</p>
      <p>Surname: {surn}</p>
      <button onClick={changeName}>Change name</button>
      <button onClick={changeSurn}>Change surname</button>
    </div>
  );
}

export default App30;
