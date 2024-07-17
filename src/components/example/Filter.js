import { useState } from "react";

function Filter(props){
    let[search,setSearch]=useState('');

    const data = [
        {
        
            name:'Salomi',
            age:20,
            gender:'female',
            phone:12334456
        },
        {
         
            name:'Mary',
            age:22,
            gender:'female',
            phone:123734223
        },
        {

            name:'Nirmal',
            age:30,
            gender:'male',
            phone:3748297422
        },
        {
        
            name:'Jeni',
            age:25,
            gender:'female',
            phone:1233438472
        },
        {
         
            name:'Hari',
            age:23,
            gender:'male',
            phone:938134723
        },
        {

            name:'Pream',
            age:27,
            gender:'male',
            phone:562952534
        },
        {
        
            name:'Thersa',
            age:26,
            gender:'female',
            phone:3433328472
        },
        {
         
            name:'Alex',
            age:50,
            gender:'male',
            phone:365923639
        },
        {

            name:'Jemila',
            age:28,
            gender:'female',
            phone:442523239
        }
    ]
    return (
        <>
            <h1> Filterable data </h1>
            <form>
                <input type="text" placeholder="search your text..." onChange={(e)=>setSearch(e.target.value)} />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      data.filter((value)=>{
                       return  search === " " ? value :
                       value.name.toLowerCase().includes(search.toLowerCase())|| 
                       value.gender.toLowerCase().includes(search.toLowerCase()) ||
                       value.phone.includes(search);
                      }).map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <button onClick={()=>props.close(false)}>close</button>
        </>
    )
}

export default Filter;