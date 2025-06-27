import "./App.css";

function App18() {
  function func(event) {
    console.log(event.target);
  }

  return (
    <div>
      <button onClick={func}>act</button>
    </div>
  );
}

export default App18;
