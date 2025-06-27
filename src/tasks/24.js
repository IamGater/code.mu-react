import "./App.css";

function App24() {
  const users = [
    { name: "user1", surn: "surn1", age: 30 },
    { name: "user2", surn: "surn2", age: 31 },
    { name: "user3", surn: "surn3", age: 32 },
  ];

  const res = users.map(function (item) {
    return (
      <p key={item.id}>
        {item.name} {item.surn} {item.age}
      </p>
    );
  });

  return <div>{res}</div>;
}

export default App24;
