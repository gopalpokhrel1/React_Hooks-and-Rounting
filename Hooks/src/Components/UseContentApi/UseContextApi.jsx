import React, {createContext} from 'react'
import ComA from './ComA';

const Biodata = createContext();

export default function UseContextApi() {
  return (
    <>
      <Biodata.Provider value={'Gopal'}>

          <ComA/>

      </Biodata.Provider>
    </>
  )
}

export {Biodata};
