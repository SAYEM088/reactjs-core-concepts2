import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUser></ExternalUser>
    </div>
  );
}

function Counter(){
  const [count, setCount] =useState(0);
  const incraseCount = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }
  const decreaseCount =()=>setCount(count-1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={incraseCount}>Increase</button> <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function ExternalUser(){
  const [users, setUser] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h1>External Use</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email ={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div style ={{
      backgroundColor: 'gray',
      border:'2px solid red',
      margin:'50px'
    }}>
      <h2>Name: {props.name}</h2>
      <p>Email : {props.email}</p>
    </div>
  )
}


// const products =[
//   {name:'Laptop' ,price : 150000},
//   {name:'Phone' ,price : 200000},
//   {name:'Watch' ,price : 50000},
//   {name:'Tablet' ,price : 150000}
// ]
// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
// <Product name="laptop" price="100000"></Product>
// <Product name="Phone" price="150000"></Product>
// <Product name="Watch" price="50000"></Product>


// function Product (props){
//   return(
//     <div className='product'>
//       <h3>Name : {props.name}</h3>
//       <p>price : {props.price}</p>
//     </div>
//   )
// }

export default App;
