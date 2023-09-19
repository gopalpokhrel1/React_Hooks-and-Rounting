import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        {
            (count>3) ? document.title= `chats (${count})` : document.title = `vite`;
        }
    }, [count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>Click</button>
    </div>
  )
}

export default UseEffect
