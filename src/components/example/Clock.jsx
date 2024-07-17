import React, { useEffect, useState } from 'react'

function Clock() {

    const [currentTime,setCurrentTime]=useState(new Date());
   
   
    useEffect(()=>{
      let timer = setInterval(() => {
          setCurrentTime(new Date());
      }, 1000);
       return () => clearInterval(timer);
    },[]);
   
    // console.log(currentTime);

    const formatTimewithZero = (num) =>{
      return num < 10 ? `0${num}` : num 
    }

    const formatHour=(hour)=>{
      return hour === 0 ? 12 : hour > 12 ? hour-12 : hour
    }

    function formatDate(date){
      const options = {weekday : 'long', month :'long', year : 'numeric',day:'numeric'}
      return date.toLocaleDateString(undefined,options);
    }
  return (
    <>
      <div style={{backgroundColor:'teal', width:'30%',padding:'5px', textAlign:'center', marginLeft:'auto', marginRight:'auto', marginTop:'30px', color:'white'}}>
        <h2> Digital Clock </h2>
        <h4> {formatTimewithZero(formatHour(currentTime.getHours()))} : {formatTimewithZero(currentTime.getMinutes())} : {formatTimewithZero(currentTime.getSeconds())} {currentTime.getHours() >= 12 ? "PM" : "AM"} </h4>
        <h4> {formatDate(currentTime)} </h4>
      </div>
    </>
  )
}

export default Clock;
