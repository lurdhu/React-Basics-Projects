


// function Home(){

//     return(
//         <>
//         <table>
//             <tr>
//                 <th> Id </th>
//                 <th> Name </th>
//                 <th> Age </th>
//                 <th> Gender </th>
//             </tr>
//             <tr>
//                 {users.map((data)=>{
//                     <>
//                     <td>{data.id}</td>
//                     <td>{data.name}</td>
//                     <td>{data.age}</td>
//                     <td>{data.gender}</td>
//                     </>
//                 })
//                 }
//             </tr>
//         </table>
//         </>
//     )
// }

import { useState } from 'react';


function Sample() {

    // const state=useState(123);
    // console.log(state)
    // const[data,setData]=useState(0);
    // console.log(data)

    // const five=()=>{
    //     setData(data+5)
    // }


    function handlesubmit(event) {
        event.preventDefault();
    }


    const add = () => {
        return (
            setVal([...val1, data])
        )
    }

    let temp = [
        { name: "salomi", age: 20, gender: "Female" },
        { name: "jerome", age: 21, gender: "Male" },
        { name: "salo", age: 22, gender: "Female" },
    ]

    const [val1, setVal] = useState([]);
    // console.log(val1)


    const [data, setData] = useState({ name: "", age: "", gender: "" });
    console.log(data)




    return (
        <>
            {/* <p> You clicked {data} times</p>
    <button onClick={()=> setData(data+1)}>Add</button> 
    <button onClick={(event)=> setData(event.data-1)}>delete</button>

    <button onClick={five}>click me</button>
     */}

            <form onSubmit={handlesubmit}>
                <input name="name" onChange={(event) => setData({ [event.target.name]: event.target.value })} />
                <input name="age" onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} />
                <input name="gender" onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} />
                <button onClick={add}> Add </button>

            </form>
            <table border="5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th> Age</th>
                        <th> Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        val1.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td> {value.name}</td>
                                    <td> {value.age}</td>
                                    <td> {value.gender}</td>
                                    {/* {/ <td><button onClick={add}>Add</button ></td> /} */}
        </tr>
                )       
})
}
            </tbody>
        </table >
    </>
    )
}

export default Sample;