import React, { useState, useEffect } from 'react';
import './main.css'
// import Crudexample from './Crudexample';

function Darkmode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    function toggleMode() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
        <div className={ isDarkMode ? "bg-black p-20": "bg-orange-600 p-20 "}>
            <p>Hello, welcome to dark mode</p>
         
            <button className="bg-red-500 text-black p-2" onClick={toggleMode}>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
           
        </div>
        {/* <Crudexample toggleMode={toggleMode} isDarkMode={isDarkMode}/> */}
        </>
       
    );
}

export default Darkmode;
