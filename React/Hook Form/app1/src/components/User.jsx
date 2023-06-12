import React, { useState } from  'react';

const User = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [cpassword, setCpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname,email, password ,cpassword};
        console.log("Welcome", newUser);
    };

    return(
        <>
        <form onChange={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setfname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setlname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setCpassword(e.target.value) } />
            </div>

        </form>
        <div>
            <h2>Your Form Data </h2>
           <p>{fname}</p> 
           <p>{lname}</p> 
           <p>{email}</p> 
           <p>{password}</p> 
           <p>{cpassword}</p> 
        </div>
        </>
    );
};

export default User