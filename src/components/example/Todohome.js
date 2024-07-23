import React, { useState,useEffect } from 'react';
import Todo from './Todo';
import './dark.css';

function Todohome() {
  let [popup, setPopup] = useState(false);
  let [value, setValue] = useState([]);
  let [editIndex, setEditIndex] = useState(null);
  let [search, setSearch] = useState('');

  function deleteItem(index) {
    let updatedData = [...value];
    updatedData.splice(index, 1);
    setValue(updatedData);
  }

  function edit(index) {
    setEditIndex(index);
    setPopup(true);
  }

  let [isMode, setMode] = useState(false);

  useEffect(() => {
    if (isMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}, [isMode]);

function toggleMode() {
  setMode(!isMode);
}

  return (
    <>
      <div>
          <div className='bg-red-300 p-2 rounded-sm w-32 text-center ml-auto mt-5'>
        <button onClick={toggleMode}> + </button>
      </div>
        <div className={ isMode ? 'bg-black mx-auto mt-32 max-w-md text-white' : 'bg-white text-black  mx-auto mt-32 max-w-md'}>
          <h3 className='text-2xl font-bold text-center mb-5 uppercase'>Todo List</h3>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex justify-between gap-5 items-center'>
              <input
                className={`border-2 border-indigo-400 rounded-sm outline-none px-2 py-1 w-full ${isMode ? 'text-black':'text-black'}`}
                type='text'
                placeholder='Search note....'
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className='bg-indigo-500 text-white px-4 py-2 uppercase rounded'>All</button>
            </div>
            <div className='mt-5'>
              {value
                .filter((item1) => {
                  return search === '' ? item1 : item1.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((item, index) => {
                  return (
                    <ul className='flex justify-between border-b' key={index}>
                      <li className='text-lg font-semibold uppercase mt-3'>{item.name}</li>
                      <div className='flex gap-3'>
                        <button
                          className='text-lg mt-3 rounded-sm bg-blue-400 px-2 mb-2 text-white pb-1'
                          onClick={() => edit(index)}
                        >
                          Edit
                        </button>
                        <button
                          className='text-lg mt-3 rounded-sm bg-red-400 px-2 mb-2 text-white pb-1'
                          onClick={() => deleteItem(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </ul>
                  );
                })}
            </div>
            <div className='mt-80 ml-auto'>
              <button className='bg-indigo-500 px-3 py-1 pb-1 text-2xl text-white rounded-full' onClick={() => setPopup(true)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <Todo
          close={setPopup}
          addValue={setValue}
          value={value}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          isMode={isMode}
          setMode={setMode}
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}

export default Todohome;
