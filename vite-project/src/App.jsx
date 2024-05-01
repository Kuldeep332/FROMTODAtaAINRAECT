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
console.log({username})
console.log({email})


  }
  
  return (
  
   <div>
    <h1>TWO WAY BINDING</h1>
    <form onSubmit={handeler}>
    <input onChange={(e)=>setuser(e.target.value)} name='username' value={username} type="text" placeholder='username' />
    <br></br>

    <input onChange={(e)=>setuser1(e.target.value)} name='email' value={email} type="text" placeholder='email' />
    <br></br>
    <input type="radio"  name='gender'/>
    male
    <br></br>

    <input type="radio"  name='gender'/>
    female
    <br></br>

    <select>
      <option>Delhi</option>
      <option>pune</option>
      <option>mp</option>
      <option>up</option>

    </select>
    <br></br>

<textarea name="" id="" cols="20" rows="3" placeholder='enter your text'>

</textarea>
<br></br>

<input type="checkbox" />
<br></br>

    <button>submit</button>
    {/* <button type='reset'></button> */}
    </form>
   </div>
  )
}

export default App
