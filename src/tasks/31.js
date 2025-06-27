import "./App.css";

import React, { useState } from "react";

function App31() {
  const [isBanned, setIsBanned] = useState(false);

  const banUser = () => {
    setIsBanned(true);
  };

  const unbanUser = () => {
    setIsBanned(false);
  };

  return (
    <div>
      <p>{isBanned ? "user banned" : "user banned"}</p>
      <button onClick={banUser} disabled={isBanned}>
        ban
      </button>
      <button onClick={unbanUser} disabled={!isBanned}>
        unban
      </button>
    </div>
  );
}

export default App31;
