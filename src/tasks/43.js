import "./App.css";
import { useState } from 'react';

function App43() {
  const [text, setText] = useState('');

  const sum = text
    .split('\n')
    .map(Number)
    .filter(n => !isNaN(n))
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <textarea onChange={e => setText(e.target.value)} />
      <p>Sum: {sum}</p>
    </div>
  );
}


export default App43;