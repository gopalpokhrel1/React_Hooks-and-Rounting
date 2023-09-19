import { useState } from "react"


export default function Array() {
    
  const biodata= [
    {
      id:0, name:'Gopal', age:'20'
    },
    {
      id:1, name:'Hari', age:'21'
    }
  ]

  const [data, setData] = useState(biodata);



  const clearData= ()=>{

    setData([]);
    
  }


  return (
    <>
      {
        data.map((val)=>{
          return(
            <h1 key={val.id}>Name: {val.name} Age:{val.age}</h1>
          )
        })
      }

      <button onClick={clearData}>Clear</button>
    </>
  )
}
