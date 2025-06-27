import "./App.css";

function App19() {
  function func(arg1, arg2) {
    console.log(arg1, arg2);
  }

  return (
    <div>
      <button onClick={() => func("eee", "second argument")}>act</button>
    </div>
  );
}

export default App19;
