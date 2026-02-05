import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0'
       onClick={() =>{
        props.setVehiclePanel (false)
       }}
        > <i className=' text-3xl text-gray-200 ri-arrow-down-wide-line'> </i></h5>
      <h3 className='text-3xl font-semibold mb-5'>
         Choose a Vehicle </h3>

      <div onClick={() => {
      props.setConfirmRidePanel (true)
      props.createRide('car')
      }}
      className ='flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between  '>
        <img  className='h-12'src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n" alt="Car" />
        <div className=' ml-2 w-1/2'>
          <h4 className='font-medium text-base'> SafarGo 
          <span>
          <i className="ri-user-3-fill"></i> 4
          </span>
          </h4>
          <h5 className='font-medium text-sm text-gray-600 font-normal'> 2 mins away </h5>
          <p className='font-medium text-xs'> Affordable, compact rides </p>
        </div>
        <h2 className='text-md font-semibold'> ₹{props.fare.car}</h2>
      </div>

       <div onClick={() => {
        props.setConfirmRidePanel (true)
        props.createRide('moto')
      }}
       className ='flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between  '>
        <img  className='h-12'src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mY2RkZWNhYS0yZWVlLTQ4ZmUtODdmMC02MTRhYTdjZWU3ZDMucG5n" alt="Moto" />
        <div className=' ml-2 w-1/2'>
          <h4 className='font-medium text-base'>  Moto 
          <span>
          <i className="ri-user-3-fill"></i> 2
          </span>
          </h4>
          <h5 className='font-medium text-sm text-gray-600 font-normal'> 1 mins away </h5>
          <p className='font-medium text-xs'> Affordable Bike  rides </p>
        </div>
        <h2 className='text-md font-semibold'>₹{props.fare.moto}</h2>
      </div>

       <div onClick={() => {
      props.setConfirmRidePanel (true)
      props.createRide('auto')
      }}
        className ='flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between  '>
        <img  className='h-12'src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="Auto" />
        <div className=' ml-2 w-1/2'>
          <h4 className='font-medium text-base'> Auto 
          <span>
          <i className="ri-user-3-fill"></i> 3
          </span>
          </h4>
          <h5 className='font-medium text-sm text-gray-600 font-normal'> 2 mins away </h5>
          <p className='font-medium text-xs'> Affordable Auto  rides </p>
        </div>
        <h2 className='text-md font-semibold'> ₹{props.fare.auto}</h2>
      </div>

    </div>
  )
}

export default VehiclePanel