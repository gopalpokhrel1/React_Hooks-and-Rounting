import React, {useState, useEffect} from 'react'


export default function Cleanup() {

    const [widhts, setWidhts] = useState(window.screen.width)

  useEffect(()=> {
    window.addEventListener('resize', ()=>{
        setWidhts(window.innerWidth)
    })

    return(
        window.removeEventListener('resize', ()=>{
            setWidhts(window.innerWidth)
        }) 
    )
  })


  return (
    <>
      <h1>The actual size of window is :</h1>
      <h1>{widhts}</h1>
    </>
  )
}
