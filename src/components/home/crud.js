import React, { useEffect, useState } from "react"

function Crud(){
    const users = [
        {
        
            name:'salomi',
            age:20,
            gender:'female',
            number:12334456
        },
        {
         
            name:'salomi',
            age:20,
            gender:'female',
             number:12374935
        },
        {

            name:'salomi',
            age:20,
            gender:'female',
            number:123428390
        }
    ]

    console.log(users);

    let [data,setData]=useState([]);
    console.log('data',data)
    let [value,setValue]=useState({name:"",age:"",gender:"",number:""});



    const handledelete = (index) => {
              let updateddata = [...data]
              updateddata.splice(index,1);
              setData(updateddata)
    }

    const edit = (index)=>{
        
    }


    const add=()=>{
          return(
            setData([...data,value]),
            setValue({name:"",age:"",gender:"",number:""})
          ) 
    }
    
    console.log(value)
return (
    <>
    <input name="name"  value={value.name} onChange={(event)=>setValue({[event.target.name]:event.target.value})}/>
    <input name="age"  value={value.age} onChange={(event)=>setValue({...value,[event.target.name]:event.target.value})}/>
    <input name="gender"  value={value.gender} onChange={(event)=>setValue({...value,[event.target.name]:event.target.value})}/>
    <input name="number"  value={value.number} onChange={(event)=>setValue({...value,[event.target.name]:event.target.value})}/>
    <button onClick={add}> Add </button>


    <table border="3">
       <thead>
       <tr>
        <th> ID </th>
        <th> Name </th>
        <th> Age </th>
        <th> Gender </th>
        <th> Number </th>
        </tr>
       </thead>
       <tbody>
        {data.map((data,index)=>{
           return (
            <tr key={index}>
            <td>{index+1}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.gender}</td>
            <td>{data.number}</td>
            <td> <button onClick={()=>edit(index)}> Edit </button> </td>
            <td><button onClick={()=>handledelete(index)}>Delete</button></td>
        </tr>
           )
        })}
       </tbody>
    </table>

    </>
)    
}


export default Crud;