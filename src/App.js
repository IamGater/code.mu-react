import "./App.css";
//
//
//
// function App() {
//   return (
//     <div className="App">
//       text
//       <p className="p1">1</p>
//       <p className="p2">2</p>
//     </div>
//   );
// }
//
// function App() {
//   return (
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//       <li>4</li>
//     </ul>
//   );
// }
//
// function App() {
//   const arr = [1, 2, 3, 4, 5];

//   return (
//     <ul>
//       <li>{arr[0]}</li>
//       <li>{arr[1]}</li>
//       <li>{arr[2]}</li>
//       <li>{arr[3]}</li>
//     </ul>
//   );
// }
//
//
// function App() {
//   const obj = { name: "john", surname: "smit" };

//   return (
//     <p>
//       name: <span>{obj.name}</span>, <br />
//       surname: <span>{obj.surname}</span>,
//     </p>
//   );
// }
//
// function App() {
// 	const attr = 'block';

// 	return <div id={attr}>
// 		text
// 	</div>;
// }
// //
// function App() {
//   const li1 = <li>text1</li>;
//   const li2 = <li>text2</li>;
//   const li3 = <li>text3</li>;
//   return <ul>
//     {li1}
//     {li2}
//     {li3}
//   </ul>;
// }
//
// function App() {
//   const items = (
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//   );

//   return {items};
// }
//
// function App() {
//   return (
//     <div>
//       <input /> <br />
//       <input /> <br />
//       <input /> <br />
//     </div>
//   );
// }
//
// function App() {
//   return (
//     <ul>
//      <li>1</li>
//      <li>2</li>
//      <li>3</li>
//      <li>4</li>
//      <li>5</li>
//      <li>6</li>
//      <li>7</li>
//      <li>8</li>
//      <li>9</li>
//      <li>10</li>
//     </ul>
//   );
// }
//
// function App() {
// 	return <table>
// 		<tr>
// 			<td>1</td>
// 			<td>2</td>
// 			<td>3</td>
// 		</tr>
// 		<tr>
// 			<td>4</td>
// 			<td>5</td>
// 			<td>6</td>
// 		</tr>
//     <tr>
// 			<td>7</td>
// 			<td>8</td>
// 			<td>8</td>
// 		</tr>
// 	</table>;
// }
//
// function App() {
//   const isAdult = true;
//
//   return <>{isAdult ? <p>isAdult = true</p> : <p>isAdult = false</p>}</>;
// }
//
// function App() {
//   const isAdmin = true;
//
//   return <>{isAdmin ? <p>isAdmin = true</p> : <p>isAdmin = false</p>}</>;
// }
//
// function App() {
//   let isAdult = false;
//   const age = 19;
//   if (age >= 18) {
//     isAdult = true;
//   }
//
//   return <>{isAdult ? <p>isAdult = true</p> : <p>isAdult = false</p>}</>;
// }
//
// function App() {
//   const isAuth = true;
//
//   return <>{isAuth ? <p>isAuth = true</p> : <p>isAuth = false</p>}</>;
// }
//
// function App() {
//   const getDigitsSum = (num) => {
//     return num
//       .toString()
//       .split("")
//       .map(Number)
//       .reduce((acc, digit) => acc + digit, 0);
//   };
//
//   return <>{getDigitsSum(12345)}</>;
// }
// function App() {
// 	function show1() {
// 		alert(1);
// 	}
//
// 	function show2() {
// 		alert(2);
// 	}
//
// 	return <div>
// 		<button onClick={show1}>act1</button>
// 		<button onClick={show2}>act2</button>
// 	</div>;
// }
//
// function App() {
// 	function func(event) {
// 		console.log(event);
// 	}

// 	return <div>
// 		<button onClick={func}>act</button>
// 	</div>;
// }
//
// function App() {
// 	function func(event) {
// 		console.log(event.target);
// 	}

// 	return <div>
// 		<button onClick={func}>act</button>
// 	</div>;
// }
//
// function App() {
//   function func(arg1, arg2) {
//     console.log(arg1, arg2);
//   }

//   return (
//     <div>
//       <button onClick={() => func("eee", "second argument")}>act</button>
//     </div>
//   );
// }
// function App() {
//   const arr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>];
//   return <ul>{arr}</ul>;
// }
// function App() {
//   const arr = [];

//   for (let i = 0; i <= 5; i++) {
//     arr.push(<li>{i}</li>);
//   }

//   return <ul>{arr}</ul>;
// }
// function App() {
//   const arr = ["a", "b", "c", "d", "e"];

//   const res = arr.map(function (item) {
//     return <li>{item}</li>;
//   });
//   return <ul>{res}</ul>;
// }
// function App() {
//   const arr = [1, 2, 3, 4, 5];

//   const res = arr.map(function (item, i) {
//     return <p key={i}>{item}</p>;
//   });

//   return <div>{res}</div>;
// }
//
//
// function App() {
//   const users = [
//     { name: "user1", surn: "surn1", age: 30 },
//     { name: "user2", surn: "surn2", age: 31 },
//     { name: "user3", surn: "surn3", age: 32 },
//   ];

//   const res = users.map(function (item, i) {
//     return (
//       <p key={i}>
//         {item.name} {item.surn} {item.age}
//       </p>
//     );
//   });

//   return <div>{res}</div>;
// }
//
//
// function App() {
//   const users = [
//     { name: "user1", surn: "surn1", age: 30 },
//     { name: "user2", surn: "surn2", age: 31 },
//     { name: "user3", surn: "surn3", age: 32 },
//   ];

//   const res = users.map(function (item) {
//     return (
//       <p key={item.id}>
//         {item.name} {item.surn} {item.age}
//       </p>
//     );
//   });

//   return <div>{res}</div>;
// }
//
//
// const App = () => {
//   const users = [
//     { id: 1, name: "user1", surn: "surn1", age: 30 },
//     { id: 2, name: "user2", surn: "surn2", age: 31 },
//     { id: 3, name: "user3", surn: "surn3", age: 32 },
//   ];

//   return (
//     <div>
//       <h1>Список пользователей</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Имя</th>
//             <th>Фамилия</th>
//             <th>Возраст</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.surn}</td>
//               <td>{user.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
//
//
// import { nanoid } from "nanoid";
//
// function App() {
//   return nanoid();
// }
//
//
// import uuid from "react-uuid";
//
// function id() {
//   return uuid();
// }
//
//
// import uuid from "react-uuid";
//
// function id() {
//   return uuid();
// }
//
// const users = [
//   { id: id(), name: "user1", age: 30 },
//   { id: id(), name: "user2", age: 31 },
//   { id: id(), name: "user3", age: 32 },
// ];
//
// console.log(users);
//
//
// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("user1");
//   const [surn, setSurn] = useState("surn1");
//   const [age, setAge] = useState(30);

//   return (
//     <div>
//       <p>{name}</p>
//       <p>{surn}</p>
//       <p>{age}</p>
//     </div>
//   );
// }
//
//
// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("user1");
//   const [surn, setSurn] = useState("surn1");

//   const changeName = () => {
//     setName("newName");
//   };

//   const changeSurn = () => {
//     setSurn("newSurn");
//   };

//   return (
//     <div>
//       <h2>Users</h2>
//       <p>Name: {name}</p>
//       <p>Surname: {surn}</p>
//       <button onClick={changeName}>Change name</button>
//       <button onClick={changeSurn}>Change surname</button>
//     </div>
//   );
// }
//
//
// import React, { useState } from "react";

// function App() {
//   const [isBanned, setIsBanned] = useState(false);

//   const banUser = () => {
//     setIsBanned(true);
//   };

//   const unbanUser = () => {
//     setIsBanned(false);
//   };

//   return (
//     <div>
//       <p>{isBanned ? "user banned" : "user banned"}</p>
//       <button onClick={banUser} disabled={isBanned}>
//         ban
//       </button>
//       <button onClick={unbanUser} disabled={!isBanned}>
//         unban
//       </button>
//     </div>
//   );
// }
//
//
// import React, { useState } from "react";

// function App() {
//   const [isBanned, setIsBanned] = useState(false);

//   const banUser = () => {
//     setIsBanned(true);
//   };

//   const unbanUser = () => {
//     setIsBanned(false);
//   };

//   return (
//     <div>
//       <p>{isBanned ? "user banned" : "user banned"}</p>

//       {isBanned ? (
//         <button onClick={unbanUser}>unban</button>
//       ) : (
//         <button onClick={banUser}>ban</button>
//       )}
//     </div>
//   );
// }
//
//
// import React, { useState } from "react";

// function App() {
//   const [age, setAge] = useState(30);

//   const increaseAge = () => {
//     setAge((prev) => prev + 1);
//   };

//   const decreaseAge = () => {
//     setAge((prev) => prev - 1);
//   };

//   return (
//     <div>
//       <p>age: {age}</p>
//       <button onClick={increaseAge}>high</button>
//       <button onClick={decreaseAge}>low</button>
//     </div>
//   );
// }
//
//
// import React, { useState } from "react";

// function App() {
//   const [text1, setText1] = useState("");
//   const [text2, setText2] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={text1}
//         onChange={(e) => setText1(e.target.value)}
//       />
//       <p>first: {text1}</p>

//       <input
//         type="text"
//         value={text2}
//         onChange={(e) => setText2(e.target.value)}
//       />
//       <p>second: {text2}</p>
//     </div>
//   );
// }
//
//
// import React, { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>{text.length}</p>
//     </div>
//   );
// }
//
//
//
// import React, { useState } from "react";

// function App() {
//   const [age, setAge] = useState("");
//   const year = new Date().getFullYear();

//   return (
//     <div>
//       <input value={age} onChange={(e) => setAge(e.target.value)} />
//       <p>{age && `Year: ${year - age}`}</p>
//     </div>
//   );
// }
//
//
//
// import React, { useState } from "react";

// function App() {
//   const [f, setF] = useState("");

//   return (
//     <div>
//       <input
//         value={f}
//         onChange={(e) => setF(e.target.value)}
//         placeholder="Фаренгейт"
//       />
//       <p>{f && `Цельсий: ${(((f - 32) * 5) / 9).toFixed(2)}`}</p>
//     </div>
//   );
// }
//
//
//
// import React, { useState } from "react";

// function App() {
//   const [nums, setNums] = useState(Array(5).fill(""));

//   const avg =
//     nums
//       .map(Number)
//       .filter((n) => !isNaN(n))
//       .reduce((a, b) => a + b, 0) / nums.filter((n) => n !== "").length || "";

//   return (
//     <div>
//       {nums.map((n, i) => (
//         <input
//           key={i}
//           value={n}
//           onChange={(e) => {
//             const copy = [...nums];
//             copy[i] = e.target.value;
//             setNums(copy);
//           }}
//         />
//       ))}
//       <p>{avg && `Среднее: ${avg.toFixed(2)}`}</p>
//     </div>
//   );
// }
//
//
//
//import React, { useState } from 'react';

// function App() {
//   const [a, setA] = useState("");
//   const [b, setB] = useState("");
//   const [result, setResult] = useState("");

//   const sum = () => {
//     setResult(Number(a) + Number(b));
//   };

//   const multiply = () => {
//     setResult(Number(a) * Number(b));
//   };

//   return (
//     <div>
//       <input value={a} onChange={(e) => setA(e.target.value)} />
//       <input value={b} onChange={(e) => setB(e.target.value)} />
//       <button onClick={sum}>Sum</button>
//       <button onClick={multiply}>Multiply</button>
//       <p>Result: {result}</p>
//     </div>
//   );
// }
//
//
//
// import React, { useState } from "react";

// function App() {
//   const [date1, setDate1] = useState("");
//   const [date2, setDate2] = useState("");
//   const [diff, setDiff] = useState("");

//   const calculateDiff = () => {
//     const d1 = new Date(date1);
//     const d2 = new Date(date2);
//     const timeDiff = Math.abs(d2 - d1);
//     const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//     setDiff(dayDiff);
//   };

//   return (
//     <div>
//       <input
//         type="date"
//         value={date1}
//         onChange={(e) => setDate1(e.target.value)}
//       />
//       <input
//         type="date"
//         value={date2}
//         onChange={(e) => setDate2(e.target.value)}
//       />
//       <button onClick={calculateDiff}>Calculate</button>
//       <p>Result: {diff && `${diff}`}</p>
//     </div>
//   );
// }
//
//
//
//
// function App() {
//   const [sum, setSum] = useState(0);
//
//   return (
//     <>
//       <input
//         onBlur={(e) =>
//           setSum([...e.target.value].reduce((a, c) => a + (+c || 0), 0))
//         }
//       />
//       <p>sum: {sum}</p>
//     </>
//   );
// }
//
//
//
//
// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   const translit = (str) =>
//     str.replace(/[А-яёЁ]/g, (char) => {
//       const map = {
//         а: "a",
//         б: "b",
//         в: "v",
//         г: "g",
//         д: "d",
//         е: "e",
//         ё: "yo",
//         ж: "zh",
//         з: "z",
//         и: "i",
//         й: "y",
//         к: "k",
//         л: "l",
//         м: "m",
//         н: "n",
//         о: "o",
//         п: "p",
//         р: "r",
//         с: "s",
//         т: "t",
//         у: "u",
//         ф: "f",
//         х: "kh",
//         ц: "ts",
//         ч: "ch",
//         ш: "sh",
//         щ: "shch",
//         ъ: "",
//         ы: "y",
//         ь: "",
//         э: "e",
//         ю: "yu",
//         я: "ya",
//       };
//       const lower = char.toLowerCase();
//       const isUpper = char !== lower;
//       const tr = map[lower] || char;
//       return isUpper ? tr.charAt(0).toUpperCase() + tr.slice(1) : tr;
//     });

//   return (
//     <div>
//       <textarea onChange={(e) => setText(e.target.value)} />
//       <p>{translit(text)}</p>
//     </div>
//   );
// }
//
//
//

//
//
//
//
//
export default App;
