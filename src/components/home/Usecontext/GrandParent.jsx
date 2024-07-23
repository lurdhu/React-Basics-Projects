import React, { createContext } from 'react'
import ParentComponent from './ParentComponent';

export const GrandContext = createContext()

function GrandParent() {
  const data = "Hello this is from Grandparent";

  return (
    <>
      <h4 className='text-xl'>GrandParentComponent</h4>
      <GrandContext.Provider value={data}>
        <ParentComponent />
      </GrandContext.Provider>
    </>
  )
}

export default GrandParent;