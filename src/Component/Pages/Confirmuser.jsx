import React, { useState } from 'react'
import './Confirmuser.css'
const Confirmuser = () => {
    const[contactoruser,setContactoruser]=useState('')
    const[orderId,setOrderId]=useState('')
    const getdata=()=>{
        let x = {contactoruser,orderId}
        console.log(x)
    }
    return (
        <>
            <div className="box">
                <div className="form-build">
                    <h1>Confirm User Order</h1>

                    <div className="orderid">
                        <label htmlFor="userId">Order ID:</label>
                        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} required />
                    </div>

                    <div className="contactoruserid">
                        <label htmlFor="userId">Contactor user Id:</label>
                        <input type="text" value={contactoruser} onChange={(e) => setContactoruser(e.target.value)} required />
                    </div>

                    <button onClick={getdata} className='submit-btn' >Submit</button>
                </div>

            </div>

        </>
    )
}

export default Confirmuser
