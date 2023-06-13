import React, {useState} from "react";
import style from "./User.module.css"
// Error
const User = (props) => {
    const [fname, setfname] = useState("");
    const [fnameError, setfnameError] = useState("");
    
    const [lname, setlname] = useState("");
    const [lnameError, setlnameError] = useState("");

    const [email, setemail] = useState("");
    const [emailError, setemailError] = useState("");

    const [password, setpassword] = useState("");
    const [passwordError, setpasswordError] = useState("");

    const [cpassword, setfcpassword] = useState("");
    const [cpasswordError, setfcpasswordError] = useState("");




    const handleFname = (e) => {
        setfname(e.target.value);
        if(e.target.value.length < 1) {
            setfnameError("Title is required!");
        } else if(e.target.value.length < 2) {
            setfnameError("first name must be at least 2 char!");
        } else {
            setfnameError("");
        }
    }

    const handleLname = (e) => {
        setlname(e.target.value);
        if(e.target.value.length < 1) {
            setlnameError("last name is required!");
        } else if(e.target.value.length < 2) {
            setlnameError("last name must be at least 2 char!");
        } else {
            setlnameError("");
        }
    }

    const handleEmail = (e) => {
        setemail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("email is required!");
        } else if(e.target.value.length < 5) {
            setemailError("email  must be at least 5 char!");
        } else {
            setemailError("");
        }
    }

    const handlePassword = (e) => {
        setpassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setpasswordError("Password must be 8 characters or longer!");
        } else {
            setpasswordError("");
        }
    }

    const handleCPassword = (e) => {
        setfcpassword(e.target.value);
        if(e.target.value.length < 1) {
            setfcpasswordError("Confirmed Password is required!");
        } else if(e.target.value.length < 8) {
            setfcpasswordError("Confirmed Password must be 8 characters or longer!");
        } else if(password != cpassword){
            setfcpasswordError("Password does not match!");
        }
        else {
            setfcpasswordError("");
        }
    }


    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {fname, lname, email, password, cpassword};
        setfname("");
        setlname("");
        setemail("");
        setpassword("");
        setfcpassword("");
        console.log(createUser);
    } 

    return(
        <>
        <div className="main">
                <form onSubmit={  createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFname  } value={fname}/>
                </div>
                    {
                    fnameError ?
                    <p style={{color:'red'}}>{ fnameError }</p> :
                    ''
                    }
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLname } value={lname}/>
                </div>
                {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                    }
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } value={email}/>
                </div>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }


                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } value={password}/>
                </div>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }


                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleCPassword } value={cpassword}/>
                </div>
                {
                    cpasswordError ?
                    <p style={{color:'red'}}>{ cpasswordError }</p> :
                    ''
                    }

                    
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