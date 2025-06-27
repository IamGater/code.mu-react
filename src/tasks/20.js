import "./App.css";

function App20() {
  const arr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>];
  return <ul>{arr}</ul>;
}
function App() {
  const arr = [];

  for (let i = 0; i <= 5; i++) {
    arr.push(<li>{i}</li>);
  }

  return <ul>{arr}</ul>;
}

export default App20;
