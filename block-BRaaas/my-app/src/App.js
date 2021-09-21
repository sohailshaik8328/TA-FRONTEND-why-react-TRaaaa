// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Button />
      <Fruit />
    </>
  )
}

function handleClick() {
  alert('Hello React Event');
}

function handleClickTwo() {
  return (
    alert(`To learn React use https://reactjs.org`),
    alert('React and ReactDOM works together'),
    alert('Babel helps in writing JSX')

  )
}

let names = [
  {name : "Arya"},
  {name : "John"},
  {name : "Bran"},
]

let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

function handleClickThree(event, name) {
  return (
    alert(`Hello ${name}`)
  )
}


class HandleClickFour {
  constructor(event, name) {
    this.event = event,
    this.name = name
  }

 handleClickFour(name) {
    return (
      alert(`Hello ${name}`)

    )
  }

}

function Button(props) {
  return (
    <>
      <button onClick ={() => handleClick()}>Click Me!</button>
      <button onClick ={() => handleClickTwo()}>How can I help you?</button>
      {names.map(name => <button key={name.name} onClick={(event) => handleClickThree(name.name)}>{name.name }</button>)}
    </>
  )
}

function Fruit() {
  return (
    <>
        {fruits.map(fruit => <button key={fruit.value} onClick={(event) => handleClickFour(fruit.value)}>{fruit.value}</button>)}
    </>
  )  
}

export default App;
