import React from 'react'
import "../Routes/Add.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Add = () => {
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState("")

  const submitForm = async (event) =>{
    event.preventDefault()
    try {
      const res = await fetch ('/api/cards',{method:'POST', body: JSON.stringify({name, designation, team, image})})
      const json = await res.json()

      setName('')
      setDesignation('')
      setTeam('')
      setImage('')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={submitForm}>
    <div className='outbox'>
      <div class="wrapper">
        <div className='top'>
          <input type='file' value={image} onChange={e=>setImage(e.target.value)}/>
          <p>Select an Image</p>
        </div>
        <div className='bottom'>
          <input type='text' placeholder='Enter ID'></input>
          <input type='text' placeholder='Enter Name' value={name} onChange={e=>setName(e.target.value)}></input>
          <input type='text' placeholder='Enter Designation' value={designation} onChange={e=>setDesignation(e.target.value)}></input>
          <input type='text' placeholder='Enter Team' value={team} onChange={e=>setTeam(e.target.value)}></input>
          <input type='text' placeholder='Enter Manager'></input>
        </div>
        <button className='submit'>Submit</button>
        <Link to='/home'>
        <button className='back'>Back</button>
        </Link>
      </div>
    </div>
    </form>
  )
}

export default Add
