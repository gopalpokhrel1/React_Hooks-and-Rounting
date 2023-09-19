import React, { useState } from 'react'

export default function ShortCircuitMethod() {

    const [demo, setDemo] = useState('');
  return (
    <>

    <h1>
        {demo || 'Gopal'}
    </h1>

    <h1>
        {
            demo && 'Pokhrel'
        }
    </h1>
      
    </>
  )
}
