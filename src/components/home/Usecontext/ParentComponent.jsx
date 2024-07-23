import React from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent () {
  return (
  <>
    <p className='text-lg'>ParentComponent</p>
    <ChildComponent/>
  </>
  )
}

export default ParentComponent;