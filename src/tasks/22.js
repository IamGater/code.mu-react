import "./App.css";

function App22() {
  const arr = [1, 2, 3, 4, 5];

  const res = arr.map(function (item, i) {
    return <p key={i}>{item}</p>;
  });

  return <div>{res}</div>;
}

export default App22;
