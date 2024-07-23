import React, { useState, useEffect } from 'react';
import './Home.css';


function Todo({ close, addValue, value, editIndex, setEditIndex, isMode, setMode, toggleMode }) {
  let [data, setData] = useState({ name: '' });
  let [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (editIndex !== null) {
      setData(value[editIndex]);
      setIsEdit(true);
    } else {
      setData({ name: '' });
      setIsEdit(false);
    }
  }, [editIndex, value]);

  function change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function add() {
    if (isEdit) {
      let updatedValue = [...value];
      updatedValue[editIndex] = data;
      addValue(updatedValue);
      setIsEdit(false);
      setEditIndex(null);
    } else {
      addValue([...value, data]);
    }
    setData({ name: '' });
    close(false);
  }

  return (
    <>
    <section className={`h-screen absolute top-0 left-0 bottom-0 right-0 ${isMode ? "bg-black":"bg-gray-50"}`}>
      <div className={`shadow-md text-center mt-32 max-w-md mx-auto rounded-lg p-5 px-10 py-7 pb-8 ${isMode ? 'bg-black text-white border borde-white' : 'bg-white text-black'}`}>
        <h1 className='text-2xl font-semibold'>New Note</h1>
        <div className='flex flex-col justify-between'>
          <div>
            <input
              className={`border-2 mt-5 w-full py-1 border-blue-300 rounded-md outline-none px-2 ${isMode ? 'text-black':'text-black'}`}
              type='text'
              name='name'
              value={data.name}
              placeholder='Input your note....'
              onChange={change}
            />
          </div>
          <div className='flex justify-between mt-20'>
            <button className='text-indigo-500 border-2 rounded-lg font-semibold uppercase px-3 border-indigo-500' type='cancel' onClick={() => close(false)}>
              Cancel
            </button>
            <button className='bg-indigo-500 text-white px-5 pt-1 pb-2 rounded-sm' type='submit' onClick={add}>
              {isEdit ? 'Update' : 'Apply'}
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Todo;
