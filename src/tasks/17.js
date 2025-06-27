import "./App.css";

function App17() {
  function func(event) {
    console.log(event);
  }

  return (
    <div>
      <button onClick={func}>act</button>
    </div>
  );
}

export default App17;
