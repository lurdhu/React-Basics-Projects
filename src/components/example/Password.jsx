import React, { useState } from 'react'
import './main.css';

function Password() {
    const [length, setLength] = useState(4);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [number, setNumber] = useState(true);
    const [symbol, setSymbol] = useState(true);
    const [password, setPassword] = useState('');

    function geratepassword() {
        let charset = '';
        if (uppercase) {
            charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (lowercase) {
            charset += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (number) {
            charset += "1234567890";
        }
        if (symbol) {
            charset += '!@#$%&*^?/\|=+-_';
        }

        let geratepass = '';

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * charset.length);
            geratepass += charset[randomIndex];
        }
        setPassword(geratepass);
    }

    function copytoClipboard() {
        navigator.clipboard.writeText(password);
        if(password){
            alert("Password Copied");
        }
        setPassword('')
    }

    return (
        <>
            <div className='password-genarator'>
                <div className='password-container'>
                    <h2>Strong Password Generator</h2>
                    <div className='input-group'>
                        <label htmlFor='num'>Passwrod length:</label>
                        <input type='number' id='num' value={length} onChange={(e) => setLength(e.target.value)} />
                    </div>
                    <div className='checkbox-group'>
                        <input type='checkbox' id='upper' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
                        <label htmlFor='upper'>Include Uppercase</label>
                    </div>
                    <div className='checkbox-group'>
                        <input type='checkbox' id='lower' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
                        <label htmlFor='lower'>Include Lowercase</label>
                    </div>
                    <div className='checkbox-group'>
                        <input type='checkbox' id='numbers' checked={number} onChange={() => setNumber(!number)} />
                        <label htmlFor='numbers'>Include Numbers</label>
                    </div>
                    <div className='checkbox-group'>
                        <input type='checkbox' id='symbol' checked={symbol} onChange={() => setSymbol(!symbol)} />
                        <label htmlFor='symbol'>Include Symbol</label>
                    </div>
                    <button onClick={geratepassword} className='genarate-btn'>Generate Password</button>
                    <div className='genarate-password'>
                        <input type='text' readOnly value={password} />
                        <button onClick={copytoClipboard}> Copy </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password;