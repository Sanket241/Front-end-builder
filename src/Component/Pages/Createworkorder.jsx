import React, { useState } from 'react'
import './Createworkorder.css'

const Createworkorder = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('construction');
    const [locality, setLocality] = useState('');
    const [budget, setBudget] = useState('');
    const [startDate, setStartDate] = useState('');
    const [cancelorder, setCancelorder] = useState('Cancel order');
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    const handleCancelorderChange = (event) => {
        setCancelorder(event.target.value)
    }
    const getdata = () => {
        let x = { userId, title, description, category, locality, budget, startDate }
        console.log(x)
    }
    return (


        <div className='form-dat'>
            <h2>Project Details Form</h2>

            <div className="Id">

                <label htmlFor="userId">User ID:</label>
                <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} required />
            </div>

            <br />

            <div className="titledata">
                <label htmlFor="title">Title:</label>
                <input type="text" id="userId" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>


            <br />

            <div className="dropdown">

                <label htmlFor="category">Category:</label>
                <select id="userId" value={category} onChange={handleCategoryChange} required>
                    <option value="construction">Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="carpentry">Carpentry</option>
                </select>
            </div>

            <br />
            <div className="localitytext">

                <label htmlFor="locality">Locality:</label>
                <input type="text" id="userId" value={locality} onChange={(e) => setLocality(e.target.value)} required />
            </div>

            <br />

            {/* Budget */}
            <div className="number">

                <label htmlFor="budget">Budget:</label>
                <input type="number" id="userId" value={budget} onChange={(e) => setBudget(e.target.value)} required />
            </div>

            <br />
            <div className="date">

                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="userId" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>

            <br />
            <div className="desc">

                <label htmlFor="description">Description:</label>
                <textarea id="userdesId" rows="1" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>


            <br /><br />
                <div className="cancelorder">

            <label htmlFor="category">CancelOrder:</label>
            <select  value={cancelorder} onChange={handleCancelorderChange} required>
                <option value="CancelUserid">CancelUserid</option>
                <option value="cancelOrderid">cancelOrderid</option>
            </select>
                </div>


            <button id='buttonorder' onClick={getdata}>Submit</button>
        </div>


    )
}

export default Createworkorder