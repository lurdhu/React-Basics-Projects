import React, { useContext } from 'react'
import { GrandContext } from './GrandParent';

function ChildComponent () {

  const value = useContext(GrandContext);

  return (
    <>
       <p className='text-base'>ChildComponent</p>
       <p>{value}</p>
    </>
  )
}

export default ChildComponent;