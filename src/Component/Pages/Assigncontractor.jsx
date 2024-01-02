import React, { useState } from 'react'
import './Assigncontractor.css'

const Assigncontractor = () => {
    const [userId, setUserId] = useState('')
    const [orderId, setOrderId] = useState('')
    const [contactorId, setContactorId] = useState('')
    const getdata=()=>{
        let x ={userId,orderId,contactorId}
        console.log(x)
    }
    return (
        <>
            <div className="box">
                <div className="form-data">
                    <h1>AssignContactor</h1>

                    <div className="userid">

                        <label htmlFor="userId">User ID:</label>
                        <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                    </div>

                    <br />
                    <div className="orderid-data">
                        <label htmlFor="userId">Order ID:</label>
                        <input type="text" id="userId" value={orderId} onChange={(e) => setOrderId(e.target.value)} required />
                    </div>

                    <br />
                    <div className="confirmuseroreder">
                        <label htmlFor="userId">Contactor ID:</label>
                        <input type="text" id="userId" value={contactorId} onChange={(e) => setContactorId(e.target.value)} required />
                    </div>
                  
                  <button onClick={getdata} className='submit-btn'>Submit</button>


                </div>
            </div>
        </>
    )
}

export default Assigncontractor