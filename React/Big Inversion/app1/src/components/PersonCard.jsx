import React from 'react'

const PersonCard = (props) => {
  return (
    <div>
        <h1>{ props.fname },{ props.lname } </h1>
        <p>Age: { props.age }</p>
        <p>Hair Color: { props.color }</p>
    </div>
  )
}

export default PersonCard
