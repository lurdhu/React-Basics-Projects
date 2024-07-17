import React, { useState } from 'react'
import './main.css'

function BMIcalculator() {

    let [height, setHeight] = useState('');
    let [weight, setWeight] = useState('');
    let [bmi, setBmi] = useState(null);
    let [status,setBmiStatus] = useState('');
    let [error,setError] = useState('');

    function calculateBmi(){
        if(height && weight){
            let heightmeters = height /100;
            let bmivalue = weight / (heightmeters * heightmeters);
            setBmi(bmivalue.toFixed(2));
            if(bmivalue <= 18.22){
                setBmiStatus('Underweight');
            }else if (bmivalue >= 18.2 && bmivalue <=24.9){
                setBmiStatus('Normal weight');
            }else {
                setBmiStatus("Obese or Overweight");
            }
           setError('');
           setHeight("");
           setWeight("");

        }
        else {
          setError('Please enter the values for height and weight:')
          setBmi(null);
          setBmiStatus('');
        }
    }
  
    function cancel(){
        setBmi(null)
    }

    return (
        <>
            <div className='bmi-calculator'>
                <h4>BMI Calculator</h4>
                <p>{error}</p>
                <div className='form-container' >
                    <div className='input-container'>
                        <label>Height(cm):</label>
                        <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div className='input-container'>
                        <label>Weight(kg):</label>
                        <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div className='btn-flex'>
                        <button onClick={calculateBmi}> Calculate BMI</button>
                        <button onClick={cancel}> Cancel</button>
                    </div>
                    {
                        bmi !== null && (
                            <div className='result'>
                                <p> Your BMI is: {bmi} </p>
                                <p>Status : {status}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default BMIcalculator;

