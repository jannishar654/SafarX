import React from 'react'
import {Link} from 'react-router-dom'

const ConfirmRidePopup = (props) => {
  return (
    <div >
        <h5 className='p-1 text-center w-[93%] absolute top-0'
       onClick={() =>{
        props.setRidePopupPanel (false)
       }}
        > <i className=' text-3xl text-gray-200 ri-arrow-down-wide-line'> </i></h5>
        <h3 className='text-3xl font-semibold mb-5'>
         Confirm this ride to start  </h3>

         <div className='flex items-center justify-between p-3 bg-yellow-400  rounded-lg  mt-4 '>
            <div className='flex items-center gap-3 '>
                <img className='h-12 w-12 rounded-full object-cover' src="https://i.pinimg.com/474x/31/9d/1e/319d1e1b798ae1da876b122cf078c51b.jpg" alt="User Pic" />
                <h2 className='text-lg font-medium '> Test User </h2>
            </div>
            <h5 className='text-lg font-semibold'> 4.6 km </h5>
         </div>
       
       

       <div className="w-full mt-5">
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-100 '>
           <i className="text-lg ri-map-pin-user-fill"></i> 
           <div>
            <h3 className='text-lg font-md'> 25C/12-B</h3>
            <p className='text-sm -mt-1 text-gray-600'> Jamia Millia Islamia </p>

           </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-100 '>
            <i className="text-lg ri-map-pin-2-fill"></i> 
           <div>
            <h3 className='text-lg font-md'> 25C/12-B</h3>
            <p className='text-sm -mt-1 text-gray-600'> Jamia Millia Islamia </p>

           </div>
        </div>
        <div className='flex items-center gap-5 p-3  '>
            <i className="text-lg ri-currency-line"></i> 
           <div>
            <h3 className='text-lg font-md'> Rs 201.05</h3>
            <p className='text-sm -mt-1 text-gray-600'> Cash - Cash </p>

           </div>
        </div>
       </div>

       

      <div className='mt-6 w-full '>
         <form onSubmit ={ (e) =>{
            submitHandler(e)
         }}>
            <input  className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5'   type="text" placeholder='Enter OTP' />

            <Link to='/captain-riding' onClick = {() =>{
        props.setConfirmRidePopupPanel(true)
        
       }} className= "w-full mt-5 bg-green-600 flex justify-center  text-white font-semibold p-2 rounded-lg "> Confirm Ride </Link>

       <button onClick = {() =>{
        props.setConfirmRidePopupPanel(false)
        props.setRidePopupPanel(false)
       }} className= "w-full mt-2 bg-red-600 text-white font-semibold p-2 rounded-lg "> Cancel Ride </button>
         </form>
      </div>

    </div>
  )
}

export default ConfirmRidePopup