import React from 'react'

const PersonCard = (props) => {
    const {fname, lname, age, color} = props;
    return(
        <>
        <h1>{lname}, {fname}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {color}</p>
        </>
    );
}

export default PersonCard