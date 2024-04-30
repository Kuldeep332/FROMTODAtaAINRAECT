import { useState } from 'react'

function App() {

  const [username, setuser] = useState("")
  const [email, setuser1] = useState("")

  const handeler=(event)=>{
    event.preventDefault();
//   console.log(event.target[0].value);
//   console.log(event.target[1].value);

// console.log(event.target.username.value);
// console.log(event.target.email.value);
console.log(username)
console.log(email)


  }
  
  return (
  
   <div>
    <h1>REACT FORM DATA</h1>
    <form onSubmit={handeler}>
    <input onChange={(e)=>setuser(e.target.value)} name='username' value={username} type="text" placeholder='username' />
    <input onChange={(e)=>setuser1(e.target.value)} name='email' value={email} type="text" placeholder='email' />
    <button>submit</button>
    {/* <button type='reset'></button> */}
    </form>
   </div>
  )
}

export default App
