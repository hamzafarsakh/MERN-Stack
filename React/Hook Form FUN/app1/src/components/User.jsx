import React, {useState} from "react";
import style from "./User.module.css"

const User = (props) => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setfcpassword] = useState("");

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {fname, lname, email, password, cpassword};
        setfname("");
        setlname("");
        setemail("");
        setpassword("");
        setfcpassword("");
    } 

    return(
        <>
        <div className="main">
                <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setfname(e.target.value) } value={fname}/>
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setlname(e.target.value) } value={lname}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setemail(e.target.value) } value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setpassword(e.target.value) } value={password}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setfcpassword(e.target.value) } value={cpassword}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div className="para">
                <p>{fname}</p>
                <p>{lname}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{cpassword}</p>
            </div>
        </div>
    </>
    );
}

export default User