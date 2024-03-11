import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Bookstore from './Bookstore'

function App() {
  const actors = ['Sakib' , 'Shoriful Raj' , 'Jashim' , 'Rubel' , ' Salman Shah'] ;

  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150}
  ]



  const singers = [
    {id: 1 ,name : 'Dr. Mahfuzur Rahman' , age: 68},
    { id: 2 , name : 'Eva Rahman' , age: 38},
    {id: 3 , name : 'Shuvro Dev' , age: 58},
    { id: 4 , name : 'Pritom' , age: 28}
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <Bookstore books={books} ></Bookstore>
    {/* {
      singers.map(singer => <Singer singer = {singer}></Singer>)
    } */}


      {/* <Actor name ={'Baappaa RAz'}></Actor>
      {
        actors.map(actor => <Actor name ={actor}></Actor>)
      } */}
      {/* <Todo
        task='Learn react'
        isDone={true}></Todo>
      <Todo
        task=' Core Concept'
        isDone={false} with='With Export Import function'></Todo>
      <Todo
        task='Try JSX'
        isDone={true} ></Todo> */}

      {/* <Device name= "Laptop" price="55"></Device>
      <Device name = "Mobile" price="17"></Device>
      <Device name = "Watch" price = "3"></Device>
      <Person></Person>
      <Student grade ="7" score ="99"></Student>
      <Student grade ={12} score ="77"></Student>
      <Student ></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This Device : {props.name} , price : {props.price} </h2>
}

function Person() {
  const age = 25;
  const money = 40;
  const person = { name: 'Sakib Khan', age: 12 };
  return <h3>I am {person.name} person with age : {age + money}</h3>
}

const { grade, score } = { grade: "7", score: "99" };


function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3> I am a Student</h3>
      <p>Class : {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: ' 20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h3> Devo Devo</h3>
      <p> I am a developer</p>
    </div>
  )
}

export default App
