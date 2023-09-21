import React from 'react'
import { useReducer } from 'react'

export default function UseReducer() {
const initialvalue = 0;

const reducer = (state, action) =>{

    if(action.type === 'increment'){
        return state+1;
    }

    else if(action.type ==='decrement'){
        return state-1;
    }
    
}
    const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <>

    <p>{state}</p>
    <button onClick={()=> dispatch({type: 'increment'})}>Inc</button>
    <button onClick={()=> dispatch({type: 'decrement'})}>Dec</button>
      
    </>
  )
}
