import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=' bg-cover md:bg-contain
  bg-center bg-no-repeat bg-[url("/HomeBg.png")] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16 ml-8' src="/HomeLogo.png" alt="Logo" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className ='text-3xl font-bold'> Get Started with SafarX</h2>
          <Link to='/login'  className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 '>Continue</Link>
        </div>

      </div>
    </div>
  )
}

export default Home