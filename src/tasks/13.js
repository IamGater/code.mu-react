import "./App.css";

function App13() {
  let isAdult = false;
  const age = 19;
  if (age >= 18) {
    isAdult = true;
  }

  return <>{isAdult ? <p>isAdult = true</p> : <p>isAdult = false</p>}</>;
}

export default App13;
