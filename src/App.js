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
//
//
export default App;
