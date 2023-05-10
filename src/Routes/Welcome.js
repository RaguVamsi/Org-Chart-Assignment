import React from 'react'
import "./Welcome.css"
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='container'>
        <div className='box'>
            <p>Hello and welcome to our organization chart!</p>
            <div className='btn'>
            <Link to="/home">
             <button>Get Started!</button>
            </Link>
            </div>
         </div>
    </div>
  )
}

export default Welcome