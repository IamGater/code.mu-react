import "./App.css";

function App41() {
  const [sum, setSum] = useState(0);

  return (
    <>
      <input
        onBlur={(e) =>
          setSum([...e.target.value].reduce((a, c) => a + (+c || 0), 0))
        }
      />
      <p>sum: {sum}</p>
    </>
  );
}

export default App41;