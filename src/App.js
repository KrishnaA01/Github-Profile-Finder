
import React, {useState, useEffect, useRef} from 'react';
import Header from './comonents/Header';
import User from './comonents/User';
import './css/style.css'

function App() {
const [user, setUser] = useState(null)

const inputRef = useRef()

//componentDidMount
useEffect(()=>{
 fetchUserProfile('KrishnaA01')
  
}, [])

const fetchUserProfile=async (name)=>{
  const response = await fetch(`https://api.github.com/users/${name}`)
  const result = await response.json()
  setUser(result)
}
const searchNewUser =(e)=>{
  e.preventDefault()
  console.log(inputRef.current.value);
  fetchUserProfile(inputRef.current.value);
  if(inputRef.current.value.trim()!== ""){
    fetchUserProfile(inputRef.current.value)
  }
  inputRef.current.value = "";
}


  return (
    <div className="App">
      <h1>My React App</h1>
      <Header/>
      <form onSubmit= {searchNewUser} >
        <input type="text" name="username" ref = {inputRef} />
        <input type="submit" value="search" />
      </form>
      {user && <User userdata= {user} /> } 
      
      
    </div>
  );
}


export default App;

