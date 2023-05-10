import React from 'react'
import "./navbar.css"

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Navbar() {
  const [cards, setCards] = useState(null)
  const [value, setValue] = useState("")

    useEffect(()=>{
      fetch('/api/cards')
      .then(res => res.json())
      .then(json => setCards(json.cards))
      .catch(err => console.log(err))
    }, [])
    console.log(cards);
    const filteredData = cards?.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase()) || item.designation.toLowerCase().includes(value.toLowerCase());
    });
  
  return (
    <div className='container1'>
        <div className='navbar'>
            <input value={value} placeholder='search for employees..' onChange={(e)=>{setValue(e.target.value)}}></input>
            <Link to="/add">
            <button className='create' >Create</button>
            </Link>
        </div>
        <div className='cards'>
          {filteredData?.map((card)=>{
            return( 
            <section key={card.id}>
              <img src={card.imgSrc} width={100} height={100}></img>
              <p className='name'>{card.name}</p>
              <p className='designation'>{card.designation}</p>
              <p className='team'>{card.team}</p>
            </section>)
          })}
        </div>
    </div>
  )
}

export default Navbar
