import React, {useContext} from 'react'
import { Biodata } from './UseContextApi'

export default function ComB() {

    const name = useContext(Biodata);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
