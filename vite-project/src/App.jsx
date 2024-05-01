import { useState } from 'react'

function App() {

  const [username, setuser] = useState("")
  const [email, setuser1] = useState("")
  const [gender, setgender] = useState("male")
  const [city, setcity] = useState("delhi")
  const [desc, setdes] = useState("")
  const [acc, setacc] = useState("true")





  const handeler=(event)=>{
    event.preventDefault();
//   console.log(event.target[0].value);
//   console.log(event.target[1].value);

// console.log(event.target.username.value);
// console.log(event.target.email.value);
console.log({username},city,gender,desc)
console.log({email})


  }
  
  return (
  
   <div>
    <h1>TWO WAY BINDING</h1>
    <form onSubmit={handeler}>
    <input onChange={(e)=>setuser(e.target.value)} name='username' value={username} type="text" placeholder='username' />
    <br></br>

    <input onChange={(e)=>setuser1(e.target.value)} name='email'
    checked={gender=="male"?true:false}
    value={email} type="text" placeholder='email' />
    <br></br>
    <input onChange={(e)=>(e.target.value)} 
    value="male"
        checked={gender==="male"?true:false}

     type="radio"  name='gender' />
    male
    <br></br>

    <input onChange={(e)=>{e.target.value}} type="radio"      value="female"
 name='gender'/>
    female
    <br></br>

    <select 
    defaultValue={city}
    onChange={(e)=>setcity(e.target.value)}
    >
      <option value="delhi">Delhi</option>
      <option value="pune">pune</option>
      <option  value="mp">mp</option>
      <option  value="up">up</option>

    </select>
    <br></br>

<textarea onChange={(e)=>setdes(e.target.value)} value={desc} name="" id="" cols="20" rows="3" placeholder='enter your text'>

</textarea>
<br></br>

<input 
checked={acc?true:false}
onChange={(e)=>setacc(e.target.checked)} type="checkbox" />
<br></br>

    <button>submit</button>
    {/* <button type='reset'></button> */}
    </form>
   </div>
  )
}

export default App
