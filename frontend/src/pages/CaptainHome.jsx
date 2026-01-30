import React from 'react'
import { Link } from 'react-router-dom'



const CaptainHome = () => {
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className="w-16 " src="/HomeLogo.png" alt="Home Logo" />
        <Link to='/home' className='  h-10 w-4 bg-white flex items-center justify-center rounded-full '>
          <i className=' text-lg font-medium ri-logout-box-r-line' ></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img className='h-full w-full object-cover ' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Home Page" />

      </div>

      <div className="h-2/5 p-6">

        <div className=' flex items-center justify-between'>
          <div className=' flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover ' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Captain Pic" />
            <h4 className='text-lg font-medium'> Captain Raj</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'> Rs. 390.8</h4>
            <p className='text-sm text-gray-600 '>Earned</p>
          </div>
        </div>

        <div>
          <div className='flex p-3 mt-8 bg-gray-100 rounder-xl justify-center gap-5 items-start'>
            <div className='text-center'>
              <i className=' text-3xl mb-2 font-thin ri-timer-2-line'></i>
              <h5 className='text-lg font-medium'>12.6</h5>
              <p className='text-sm text-gray-600'> Hours Online </p>
            </div>
            <div className='text-center'>
              <i className='text-3xl mb-2 font-thin ri-speed-up-line'> </i>
              <h5 className='text-lg font-medium'>12.6</h5>
              <p className='text-sm text-gray-600'> Hours Online </p>
            </div>
            <div className='text-center'>
              <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
              <h5 className='text-lg font-medium'>12.6</h5>
              <p className='text-sm text-gray-600'> Hours Online </p>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default CaptainHome