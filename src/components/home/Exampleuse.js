import { useState } from "react";

function Example(){
    // let [user,setUser]=useState({name:"ram",age:21});

    // let changeName=(e)=>{
    //     setUser((oldState)=>{
    //         return(
    //             {...oldState, name:e.target.value}
    //         )
    //     })
    // }

    // let changeAge=(e)=>{
    //     setUser((oldState)=>{
    //         return(
    //             {...oldState, age:e.target.value}
    //         )
    //     })
    // }

    // function change(e){
    //    setUser({...user,[e.target.name]:e.target.value})
    // }

    let[value,setValue]=useState([]);
    let[data,setData] = useState({name:""});

    
    function change(e){
        setData(()=>{
            return{...data,[e.target.name]:e.target.value}
        })
    }

    function Add(){
        setValue([...value,data]);
        setData({name:""})
    }

    // 
    // function deleteitem(index){
    //     let newtodo = value.filter((todo)=>{
    //         return todo !== index;
    //     })
    //     setValue(newtodo)
    // }

        function deleteitem(index){
        let updateddata=[...value]
        updateddata.splice(index,1)
        setValue(updateddata)
    }

   
    function edit(index){
        let temp=value?.filter((_,idx) => idx === index)
        console.log('temp',temp[0])
        setData(temp[0])
        // setValue(temp[0])
    }



    return (
        <>
        {/* <p>{user.name}</p>
        <p>{user.age}</p>
        <form>
            
            <input type="text" name="name" placeholder="enter user name" onChange={change} value={user.name}/>
            <input type="text" name="age" placeholder="enter user age" onChange={change} value={user.age}/>
        </form> */}

        <input type="text" value={data.name} name="name" onChange={change}/>
        <button onClick={Add}>Add</button>

    
            { 
            value.map((data,index)=>{
                return(
                    <>
                        <p>{data.name}</p>
                        <button onClick={() => edit(index)}>edit</button>
                        <button onClick={() => deleteitem(index)}>delete</button>
                    </>
                )
            })
            }       


 </>
    )
}

export default Example;