import React from 'react'

function user(props) {
  return (
    <>
    <h1>Structured Probs</h1>
    <h2>{props.name}</h2>
    <h2>{props.age}</h2>
    <h2>{props.phonenumber}</h2>
    <h2>{props.emailid}</h2>
    </>

  )
}

export default user