import "./App.css";

import React, { useState } from "react";

function App32() {
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

      {isBanned ? (
        <button onClick={unbanUser}>unban</button>
      ) : (
        <button onClick={banUser}>ban</button>
      )}
    </div>
  );
}

export default App32;
