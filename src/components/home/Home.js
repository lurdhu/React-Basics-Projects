import {useState,useEffect} from 'react';

function Home ({person}){

let {name,age,aboutme}= person

let [dynamicage,setdynamicage] = useState(age);
let [calculation,setCalculation]=useState(dynamicage);

let [user,setUser]=useState({name:"ram",age:21});
console.log(user);

// examples of usestate 
const setuserName=()=>{
    setUser({...user,name:"salomi"})
}

const setuserAge=()=>{
    setUser({...user,age:22})
}

useEffect(()=>{
    setCalculation(()=>dynamicage*2)
},[dynamicage])



const handleclick=()=>{
    setdynamicage(dynamicage + 1)
    // setdynamicage(dynamicage*2)
}

    return (
        <>
        <p> This is home page </p>
        <p> My name is {name}</p>
        <p> My age is {dynamicage}</p>
        <button onClick={handleclick}> Click me</button>
        <p>Calculation:{calculation}</p>
        {aboutme.map((data,index)=><p key={index}>{index+1}. {data}</p>)}
        {/* <input type='text' />
        <button onClick={click}>Submit</button> */}

        <p>{user.name}</p>
        <p>{user.age}</p>
        <button onClick={setuserName}> SetUser Name</button>
        <button onClick={setuserAge}> SetUser Age</button>
        </>
    )
}

export default Home;



