import React, { useState } from 'react'

function Calender() {

    let week = ["Sunday",'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]
    let year = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029]
    const [selectedDate, setselectedDate] = useState(new Date());

    function DaysInMonth() {
        let daysArray = [];
        let firstday = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
        console.log(firstday)
        let lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 0);
        console.log(lastDay)

        for (let i = 0; i < firstday.getDay(); i++) {
            daysArray.push(null);
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            daysArray.push(new Date(selectedDate.getFullYear(),selectedDate.getMonth(), i));
        }
        return daysArray;
    }

    function handleChangeMonth(e){
        let newMonth = parseInt(e.target.value,10);
        setselectedDate(new Date(selectedDate.getFullYear(),newMonth, selectedDate.getDate()));   
    }

    function handleChangeYear(e){
        let newYear = parseInt(e.target.value,10);
        setselectedDate(new Date(newYear, selectedDate.getMonth(), selectedDate.getDate()));   
    }
   
    function changebefore(){
        setselectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()-1,1)); 
    }
    function changeafter(){
        setselectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,1)); 
    }

    return (
        <>
           <button onClick={changebefore}>&lt;</button>
            <select value={selectedDate.getMonth()} onChange={handleChangeMonth}>
                {
                    month.map((month, index) => {
                        return (
                            <option value={index}>{month}</option>
                        )
                    })
                }
            </select>
            <select value={selectedDate.getFullYear()} onChange={handleChangeYear}>
                {
                    year.map((year, index) => {
                        return (
                            <option value={year}>{year}</option>
                        )
                    })
                }
            </select>
            <button onClick={changeafter}>&gt;</button>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' ,textAlign: 'center'}}>
                {
                    week.map((weekday) => {
                        return (
                            <i>{weekday}</i>
                        )
                    })
                }
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',textAlign: 'center'}}>
                {
                    DaysInMonth().map((day, index) => {
                        return (
                            <div key={index} >{day ? day.getDate() : ''} </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Calender;