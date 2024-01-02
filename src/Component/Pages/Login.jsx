import './Login.css'
// import Navbar from '../Navbar/Navbar'
import Client from './Client'
import Constructor from './Constructor'
import { useState } from 'react'

function Login() {
  const [login, setLogin] = useState(false)
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  }

  function click() {
    let x = { name, pass }

    console.log(x)

  }



  return (

    <>
      {/* <Navbar /> */}


      <div className="log-in">
        <div className="box">
          <h1>Login</h1>

          <div className="user">
            <p>Username</p>
            <input type="text" placeholder='Enter Username' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="pass">
            <p>Password</p>
            <input type="text" placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>


          <select value={selectedValue} onChange={handleDropdownChange} className='select'>
            <option >Choose one</option>
            <option value="client">Client</option>
            <option value="constructor">Constructor</option>
          </select>


          <button className='click' >Log in</button>

        </div>
      </div>



    </>
  )
}

export default Login