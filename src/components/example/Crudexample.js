import React, { useState } from 'react'

function Crudexample({toggleMode,isDarkMode}) {

    let [value, setValue] = useState([]);
    let [data, setData] = useState({ name: '', age: '', gender: '', number: '' });
    let [isEdit,setisEdit]=useState(false);
    let [editIndex,seteditIndex]=useState(null);


    function change(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function Add() {
        if(isEdit){
           let updatedvalue=[...value];
           updatedvalue[editIndex]=data;
           setValue(updatedvalue);
           setisEdit(false);
           seteditIndex(null);
        }
        else{
            setValue([...value,data]);
        }
        setData({ name: '', age: '', gender: '', number: '' })
    }
   
    function deleteitem(index){
        let updateddata = [...value];
        updateddata.splice(index,1)
        setValue(updateddata)
    }

    function edit(index){
        setData(value[index])
        setisEdit(true);
        seteditIndex(index)
    }

    return (
        <>
          <div className={isDarkMode ? 'bg-black mx-auto max-w-sm flex flex-col p-4 border border-white ':'bg-teal-400 mx-auto max-w-sm flex flex-col p-4'}>
         <label>Name:</label>
            <input className='border border-gray-400 block mb-3' type='text' name='name' onChange={change} value={data.name} />
            Age:
            <input className='border border-gray-400 block mb-3' type='text' name='age' onChange={change} value={data.age} />
            Gender:
            <input className='border border-gray-400 block mb-3' type='text' name='gender' onChange={change} value={data.gender} />
            Number:
            <input className='border border-gray-400 block mb-3' type='text' name='number' onChange={change} value={data.number} />
            <button className='bg-green-950 text-white px-4 py-2 text-center mx-auto rounded-sm hover:bg-green-900 transition-all duration-300' onClick={Add}> {isEdit?"Update":"Add"} </button>
          </div>

            <table className='border border-blue-500 mt-10 mx-auto text-center'>
                <thead>
                    <tr className='border border-blue-500 p-3'>
                        <th className='border border-blue-500 px-3'>Name</th>
                        <th className='border border-blue-500 px-3'>Age</th>
                        <th className='border border-blue-500 px-3'>Gender</th>
                        <th className='border border-blue-500 px-3'>Number</th>
                        <th className='border border-blue-500 px-3' colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        value.map((data1,index) => {
                            return(
                            <tr className='border border-blue-500' key={index}>
                                <td className='border border-blue-500'>{data1.name}</td>
                                <td className='border border-blue-500'>{data1.age}</td>
                                <td className='border border-blue-500'>{data1.gender}</td>
                                <td className='border border-blue-500'>{data1.number}</td>
                                <td className='px-1'><button className='bg-blue-500 text-white px-4 py-2 rounded-sm mt-2 mb-2' onClick={()=>edit(index)}>Edit</button></td>
                                <td className='px-1'><button className='bg-red-500 text-white px-4 py-2 rounded-sm mt-2 mb-2' onClick={()=>deleteitem(index)}>delete</button></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Crudexample;