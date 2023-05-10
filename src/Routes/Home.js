import React from 'react'
import Navbar from '../components/Navbar'
import Chart from '../components/chart'
import '../Routes/Home.css'
const Home = () => {
  return (
    <div className='grid'>
        <Navbar />
        <Chart />
    </div>
  )
}

export default Home