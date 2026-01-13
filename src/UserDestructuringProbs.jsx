
import React from 'react'

{/* 
  function UserDestructuringProbs({name,age}) {
  return (
    <>
    <h1>De-structuring Probs</h1>
    <h2>{name}</h2>   
    <h2>{age}</h2>
    </>
    
  )
}*/}

function UserDestructuringProbs(probs) {
  return (
    <>
    <h1>Receving Data using Spread Operator</h1>
    <h2>{probs.name}</h2>   
    <h2>{probs.age}</h2>
    <h2>{probs.gender}</h2>
    </>
  )
}

export default UserDestructuringProbs