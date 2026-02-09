import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0'
       onClick={() =>{
        props.setRidePopupPanel (false)
       }}
        > <i className=' text-3xl text-gray-200 ri-arrow-down-wide-line'> </i></h5>
        <h3 className='text-3xl font-semibold mb-5'>
         New Ride Available  </h3>

         <div className='flex items-center justify-between p-3 bg-yellow-400  rounded-lg  mt-4 '>
            <div className='flex items-center gap-3 '>
                <img className='h-12 w-12 rounded-full object-cover' src="https://i.pinimg.com/474x/31/9d/1e/319d1e1b798ae1da876b122cf078c51b.jpg" alt="User Pic" />
                <h2 className='text-lg font-medium '> {props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname} </h2>
            </div>
            <h5 className='text-lg font-semibold'> 4.6 km </h5>
         </div>
       
       

       <div className="w-full mt-5">
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-100 '>
           <i className="text-lg ri-map-pin-user-fill"></i> 
           <div>
            <h3 className='text-lg font-md'> 25C/12-B</h3>
            <p className='text-sm -mt-1 text-gray-600'> {props.ride?.pickup} </p>

           </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-100 '>
            <i className="text-lg ri-map-pin-2-fill"></i> 
           <div>
            <h3 className='text-lg font-md'> 25C/12-B</h3>
            <p className='text-sm -mt-1 text-gray-600'> {props.ride?.destination} </p>

           </div>
        </div>
        <div className='flex items-center gap-5 p-3  '>
            <i className="text-lg ri-currency-line"></i> 
           <div>
            <h3 className='text-lg font-md'> {props.ride?.fare}</h3>
            <p className='text-sm -mt-1 text-gray-600'> Cash - Cash </p>

           </div>
        </div>
       </div>

      <div className=' flex mt-5 w-full items-center justify-between'>

         <button onClick = {() =>{
        props.setRidePopupPanel(false)
       }} className= " mt-1 bg-gray-200 text-gray-700 font-semibold p-3 px-10 rounded-lg "> Ignore </button>
         <button onClick = {() =>{
        props.setConfirmRidePopupPanel(true)
        
       }} className= " mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg "> Accept </button>

      
      </div>

    </div>
  )
}

export default RidePopUp