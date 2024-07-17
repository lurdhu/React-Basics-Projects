import './main.css';
import React, { useEffect, useState } from 'react'

function Adviceapp() {

  let [advice,setAdvice] =useState('Please click button to get advice');
  let [count,setCount] = useState(0)

 async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(c=>c+1);
  }

  useEffect (()=>{
    getAdvice();
  },[])

  
    return (
        <>
            <div className='container'>
                <h4>{advice} </h4>
                <button onClick={getAdvice}> Get Advice </button>
                <p>You have read <span>{count} </span>pieces of advice</p>
            </div>
        </>
    )
}

export default Adviceapp;