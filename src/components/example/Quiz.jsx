import React, { useEffect, useState, useTransition } from 'react';
import './main.css'


function QuizData({ data }) {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0)
    const [showScore,setShowScore]=useState(false);
    const [timer,setTimer]=useState(10);

    useEffect(()=>{
      let interval;
      if(timer > 0 && !showScore){
        interval=setInterval(() => {
            setTimer((prevtimer)=>prevtimer-1)
        }, 1000);
      }else{
        clearInterval(interval);
        setShowScore(true);
      }
      return()=>clearInterval(interval);

    },[timer,showScore])

    function handleAnswerClick(selectedOption){
        if(selectedOption === data[currentQuestion].correctOption ){
            setScore((prevscore)=>prevscore+1)
        }
        if(currentQuestion < data.length-1){
            setCurrentQuestion((prevquestion)=>prevquestion+1);
            setTimer(10);
        }
        else {
            setShowScore(true);
        }
    }
    
    function restart(){
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
        setTimer(10);
    }


    return (
        <>
          <div className='quiz-app'>
          <div className='quiz-container'>
                <h3> Quiz App </h3>
                {
                    showScore ? (
                        <div>
                    <h4> Your Score:{score}/{data.length}</h4>
                    <button onClick={restart} className='restart'>Restart</button>
                </div>
                    ):(
                        <div>
                        <h3> Question {currentQuestion+1} </h3>
                        <p> {data[currentQuestion].question} </p>
                        <div className='quiz-option'>
                           {
                            data[currentQuestion].options.map((option,index)=>{
                              return(
                                <button key={index} onClick={()=>handleAnswerClick(option)}>{option}</button>
                              )
                            })
                           }
                        </div>
                        <div className='timer'> Time Left:<span>{timer}s</span></div>
                    </div>
                    )
                }
            </div>
          </div>
        </>
    )
}



function Quiz() {

    let data = [
        {
            id: 1,
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctOption: 'Paris'
        },
        {
            id: 2,
            question: 'What is the capital of Germany?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctOption: 'Berlin'
        },
        {
            id: 3,
            question: 'What is the capital of Spain?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctOption: 'Madrid'
        },
    ]
    return (
        <>
            <QuizData data={data} />
        </>
    )
}

export default Quiz;