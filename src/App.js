import { useState } from 'react';
import './App.css';
import Filter from './components/example/Filter';
// import Example from './components/home/Exampleuse';
// import Home from './components/home/Home';
// import Crud from './components/home/crud';
// import Sample from './components/home/crudhome';
import Profile from './components/example/ProfileCard';
import Adviceapp from './components/example/Adviceapp';
import BMIcalculator from './components/example/BMIcalculator';
import Clock from './components/example/Clock';
import Accordian from './components/example/Accordian';
import Password from './components/example/Password';
// import Useeffect from './components/home/UseEffect';

function App() {
  let[showModel,setShowModel]=useState(false);

  const person = {
    name: 'salomi',
    age : 21,
    aboutme : [
      'my favourite hobbies is dance',
      'I like dance',
      '123344'
    ]
  }

  const person1 = {
    name: 'mary',
    age:22,
    aboutme : [
      '123',
      'hii',
      'hello wolrd'
    ]
  }

  return (
   <>
   {/* <p> Hello World </p>
   <button onClick={()=>setShowModel(true)}> open model </button> */}
   {/* <Home person={person}/> */}
   {/* <Home person={person1}/> */}
   {/* <Sample /> */}
   {/* <Crud /> */}
   {/* <Example /> */}
  {/* {
    showModel && (
      <Filter close={setShowModel}/>
    )
  } */}

 {/* <Profile /> */}
 {/* <Adviceapp /> */}
 {/* <BMIcalculator /> */}
 {/* <Useeffect /> */}
 <Clock />
 {/* <Accordian /> */}
 <Password />
   </>
  );
}

export default App;
