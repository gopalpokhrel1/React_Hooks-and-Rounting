import React, {useRef} from 'react'

export default function UseRef() {

    const values= useRef(null)

    const handle = ()=>{
        const name = values.current.value;

        console.log(name);
    }
  return (
    <>
      <input type="text"  ref={values}/>
      <button onClick={handle}>submit</button>
      
        <p>{`${values.current.value}`} </p>
      
    </>
  )
}
