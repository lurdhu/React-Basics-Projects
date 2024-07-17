import React, { useEffect,useState } from 'react'

function Useeffect () {

    // syntax 
            // useEffect(()=>{
                    // 1.The code thatwe want to run
                    // 3.Optional return function or this function called cleanup function 
            // },[]),2.Dependency Array
    
    // no.1 No Dependency  
    // we are not using to dependency in useeffect  the values is changing what we work in the application
    //  useEffect(()=>{
    //     console.log("I am not Dependencies useEffect");
    //  })

    
    // no.2 Empty Dependecy array 
    // define : Only run in the first time page is loading or run only the fisrt time mounting
 // useEffect(()=>{
    //     console.log("I am Empty Dependencies useEffect");
    //  },[])

    //no.3 Cleanup function to use return 

     useEffect(()=>{
        console.log("Mounted");
        return () => console.log('Un-Mounted')  // return is used to cleanup the prevois values inthe re-render 
     },[])

    const [count,setCount] =useState(0);
    const [time,setTimes] = useState(0);

    // useEffect(()=>{
    //     console.log("I am Empty Dependencies useEffect");
    //  },[count])


  return (
    <>
     <h5> Count :  {count} </h5>
     <h5> Time: {time} </h5>
    <button onClick={()=>{setCount(count+1)}}> + </button>
    <button onClick={()=>{setCount(count-1)}}> - </button>
    <button onClick={()=>{setTimes(time+1)}}> T </button>
    </>
  )
}


export default Useeffect;
