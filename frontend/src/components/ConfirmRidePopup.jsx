import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopup = (props) => {

   const [otp, setOtp] = useState('')
   const navigate = useNavigate()

   const submitHandler = async (e) => {
      e.preventDefault()

      try {
         const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
            {
               params: {
                  rideId: props.ride._id,
                  otp: otp
               },
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
               }
            }
         )

         if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding')
         }

      } catch (err) {
         console.log(err.response?.data || err.message)
      }
   }

   return (
      <div>
         <h5
            className='p-1 text-center w-[93%] absolute top-0'
            onClick={() => {
               props.setRidePopupPanel(false)
            }}
         >
            <i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i>
         </h5>

         <h3 className='text-3xl font-semibold mb-5'>
            Confirm this ride to start
         </h3>

         <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
               <img
                  className='h-12 w-12 rounded-full object-cover'
                  src="https://i.pinimg.com/474x/31/9d/1e/319d1e1b798ae1da876b122cf078c51b.jpg"
                  alt="User Pic"
               />
               <h2 className='text-lg font-medium'>
                  {props.ride?.user.fullname.firstname}
               </h2>
            </div>
            <h5 className='text-lg font-semibold'>4.6 km</h5>
         </div>

         <div className="w-full mt-5">
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-100'>
               <i className="text-lg ri-map-pin-user-fill"></i>
               <div>
                  <h3 className='text-lg font-md'>25C/12-B</h3>
                  <p className='text-sm -mt-1 text-gray-600'>
                     {props.ride?.pickup}
                  </p>
               </div>
            </div>

            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-100'>
               <i className="text-lg ri-map-pin-2-fill"></i>
               <div>
                  <h3 className='text-lg font-md'>25C/12-B</h3>
                  <p className='text-sm -mt-1 text-gray-600'>
                     {props.ride?.destination}
                  </p>
               </div>
            </div>

            <div className='flex items-center gap-5 p-3'>
               <i className="text-lg ri-currency-line"></i>
               <div>
                  <h3 className='text-lg font-md'>{props.ride?.fare}</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Cash - Cash</p>
               </div>
            </div>
         </div>

         <div className='mt-6 w-full'>
            <form onSubmit={submitHandler}>
               <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5'
                  type="text"
                  placeholder='Enter OTP'
               />

               <button
                  type="submit"
                  className="w-full mt-5 bg-green-600 text-white text-lg font-semibold p-2 rounded-lg"
               >
                  Confirm
               </button>

               <button
                  type="button"
                  onClick={() => {
                     props.setConfirmRidePopupPanel(false)
                     props.setRidePopupPanel(false)
                  }}
                  className="w-full mt-2 bg-red-600 text-lg text-white font-semibold p-2 rounded-lg"
               >
                  Cancel Ride
               </button>
            </form>
         </div>
      </div>
   )
}

export default ConfirmRidePopup
