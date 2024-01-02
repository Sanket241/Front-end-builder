import React, { useState } from 'react'
import './Getalladdress.css'
const Getalladdress = () => {
    const [getallorder, setGetallorder] = useState('')
    const [mapitem, setMapitem] = useState([])
    const getallitem = () => {
        setMapitem(
            //write map function

        )
    }
    return (
        <>

            <div className="box">
                <div className="form">

                    <div className="getalladdress">
                        <label htmlFor="userId">Get all Order:</label>
                        <input type="text" id="userId" value={getallorder} onChange={(e) => setGetallorder(e.target.value)} required />
                        <button onClick={getallitem} className='submit-btn'>Get All Item</button>
                        {mapitem}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Getalladdress