import React, { useState } from 'react'

export default function SpreadOperator() {

const [myObject, setMyObject]= useState({
    name:'Gopal', Age:'20', Faculty:'CSIT'
})
 
const Update =()=>{
    setMyObject({...myObject, name:'Gopal Pokhrel'})
}

  return (
    <>
      <h1>Name:{myObject.name} Age:{myObject.Age} Faculty:{myObject.Faculty} </h1>
      <button onClick={Update}>Update</button>
    </>
  )
}
