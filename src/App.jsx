import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   return (
    <>  
      <h1>Vite + React</h1> 
      <Device name= "Laptop" price="55"></Device>
      <Device name = "Mobile" price="17"></Device>
      <Device name = "Watch" price = "3"></Device>
      <Person></Person>
      <Student grade ="7" score ="99"></Student>
      <Student grade ="9" score ="77"></Student>
      <Student ></Student>
      <Developer></Developer>
    </>
  )
}

function Device (props) {
  // console.log(props);
  return <h2>This Device : {props.name} , price : {props.price} </h2>
}

function Person(){
  const age = 25 ;
  const money = 40 ;
  const person = { name : 'Sakib Khan' , age : 12};
  return <h3>I am {person.name} person with age : {age + money}</h3>
}

const {grade , score} = { grade: "7", score: "99" };


function Student ({grade =1 , score =0}){
console.log(grade , score);
  return (
    <div className='student'>
    <h3> I am a Student</h3>
    <p>Class : {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle ={
    margin : ' 20px',
    padding : '20px',
    border : '2px solid purple',
    borderRadius : '20px'
  }
  return (
    <div style={developerStyle}>
      <h3> Devo Devo</h3>
      <p> I am a developer</p>
    </div>
  )
}

export default App