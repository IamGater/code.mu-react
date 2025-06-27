import "./App.css";

function App15() {
  const getDigitsSum = (num) => {
    return num
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);
  };

  return <>{getDigitsSum(12345)}</>;
}

export default App15;
