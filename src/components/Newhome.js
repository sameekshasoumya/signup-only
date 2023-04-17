import React, { useState } from 'react';
import './Newhome.css';

const Newhome = () => {
    const [userInput,setUserInput] = useState({
        userfirstname: "",
        userlastname: "",
        email: "",
        phone: "",
        category: "",
        password: "",
        password2: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({...userInput, [name] : value})
    }

    return(
        <>
            <div class="wrapper">
        <div class="form-container">
            <div class="form">
                <div class="heading">
                    <h2>Sign Up</h2>
                </div>


                <div class="form-wrap fullname">
                    <div class="form-item">
                        <label htmlFor="userfirstname">First Name</label>
                        <input type="text" value={userInput.userfirstname} onChange={handleInput} name="userfirstname" id="userfirstname" required/>
                    </div>
                    <div class="form-item">
                        <label htmlFor="userlastname">Last Name</label>
                        <input type="text" value={userInput.userlastname} onChange={handleInput} name="userlastname" id="userlastname" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" value={userInput.email} onChange={handleInput} name="email" id="email" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="phone">Phone (Aadhar Linked Number)</label>
                        <input type="number" value={userInput.phone} onChange={handleInput} name="phone" id="phone" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                    <label htmlFor="category">Please select your contribution category : Type 'D' for Donor and 'A' for Agent</label>
                    <input type="text" value={userInput.category} onChange={handleInput} name="category" id="category" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="text" value={userInput.password} onChange={handleInput} name="password" id="password" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="password2">Re-enter Password</label>
                        <input type="text" value={userInput.password2} onChange={handleInput} name="password2" id="password2" required/>
                    </div>
                </div>

                <div class="btn">
                    <input type="submit" value="Submit Request"/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default Newhome