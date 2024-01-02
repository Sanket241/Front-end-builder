import './Register.css'
import axios from 'axios';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import Navbar from '../Navbar/Navbar'
import Dropdown from 'react-bootstrap/Dropdown';

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [username, setUsername] = useState("")
  const [ethAddress, setEthAddress] = useState("")
  const [address, setAddress] = useState("")
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();
  // axios.post(`${baseUrlAuth}/contractor/signup`, requestBody);
  // const baseUrlAuth = "https://back-end-ty14.vercel.app/auth";

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  }


  async function signup() {
    let item = { name, email, password, phone, username, ethAddress, address, selectedValue }
    console.log(item)
    // let result = await axios.post("https://back-end-ty14.vercel.app/api/auth/contractor/signup", {
    //   item,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // result = result;
    // console.warn("result", result)
    // localStorage.setItem("user-info", JSON.stringify(result));
    // navigate("/login")

  }




  return (
    <>
      {/* <Navbar /> */}
      <div className="regi">
        <div className="regi-block">
          <h1>Register</h1>

          <div className="email-block">
            <div className="name">
              <p>Name</p>
              <input type="text" value={name} placeholder='Enter Name here..' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="email">
              <p>E-mail</p>
              <input type="text" value={email} placeholder='Enter Email here..' onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="user">
            <p>User Name</p>
            <input type="text" value={username} placeholder='Enter User Name here..' onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="password">
            <p>Password</p>
            <input type="password" value={password} placeholder='Enter Password here..' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="contact">
            <p>Contact Number</p>
            <input type="tel" value={phone} placeholder='Enter Contact here..' onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="h-address">
            <p>Addres</p>
            <input type="tel" value={address} placeholder='Enter Contact here..' onChange={(e) => setAddress(e.target.value)} />
          </div>

          <div className="eth-userid">
            <p>UserId</p>
            <input type="tel" value={ethAddress} placeholder='Enter Contact here..' onChange={(e) => setEthAddress(e.target.value)} />
          </div>

          <select value={selectedValue} onChange={handleDropdownChange} className='select'>
            <option >Choose one</option>
            <option value="client">Client</option>
            <option value="constructor">Constructor</option>
          </select>



          <button onClick={signup}>Register</button>
          <span>Forgot<NavLink to="#" >password</NavLink></span>
        </div>
      </div>



    </>
  )
}

export default Register




