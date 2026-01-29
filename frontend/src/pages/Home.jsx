import React , { useState, useRef} from 'react'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel.jsx'


const Home = () => {
   const [pickup, setPickup] = useState('')
   const[destination, setDestination] = useState('')
   const [panelOpen, setPanelOpen] = useState (false)
   const panelRef=useRef(null)
   const vehiclePanelRef=useRef (null)
   const panelCloseRef=useRef (null)
   const[vehiclePanel , setVehiclePanel] = useState (false)



 
   const submitHandler = (e) => {
    e.preventDefault();
    
  }

  // GSAP Is a animation library 

  useGSAP(() => { 
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding:24
      }) 
      gsap.to(panelCloseRef.current, {   

        opacity: 1
       })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
       })
    }

  }, [panelOpen])

  useGSAP(function() {
    if(vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
       transform: 'translateY(0)',
      })
    } else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
       })
    }

  }, [vehiclePanel])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-16 absolute left-5 top-5" src="/HomeLogo.png" alt="Home Logo" />
     <div
     
      className='h-screen w-screen '>
      {/*Image for temporary use */}
      <img className='h-full w-full object-cover ' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Home Page" />
     </div>

     <div className='   flex flex-col justify-end  h-screen absolute top-0  w-full '>
      <div className='h-[30%] bg-white p-6 relative'>
        <h5 
        ref={panelCloseRef}
        onClick ={() => {
          setPanelOpen(false)
        }} 
        className='absolute right-6 top-6 text-2xl opacity-0'>
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className='text-2xl font-semibold'> Find a trip </h4>
      <form onSubmit ={(e) =>{
        submitHandler(e)
      }}>
        <div className="line absolute h-16 w-1 top-[38%] left-10 bg-gray-900 rounded-full"></div>
        <input 
        onClick ={() => {setPanelOpen(true)} }
        value={pickup}
      onChange={(e) => {setPickup(e.target.value)}
         }
        
        className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'  
        type="text" 
        placeholder ='Add a pick-up location'  />
        <input 
        onClick ={() => {setPanelOpen(true)} }
        value={destination}
         onChange={(e) => {setDestination(e.target.value)}
         }
        className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full' 
        type="text" 
        placeholder='Enter your destination' />
      </form>
      </div>
      <div ref ={panelRef} className='h-[70%] bg-white h-0  '>
        <LocationSearchPanel setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel} />

      </div>
     </div>
     <div ref={vehiclePanelRef} className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14">
      <h5 className='p-1 text-center w-[93%] absolute top-0'> <i className=' text-3xl text-gray-200 ri-arrow-down-wide-line'> </i></h5>
      <h3 className='text-3xl font-semibold mb-5'>
         Choose a Vehicle </h3>

      <div className ='flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between  '>
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
        <h2 className='text-md font-semibold'> Rs 200.04</h2>
      </div>

       <div className ='flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between  '>
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
        <h2 className='text-md font-semibold'> Rs 100.21</h2>
      </div>

       <div className ='flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between  '>
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
        <h2 className='text-md font-semibold'> Rs 151.38</h2>
      </div>

     </div>
    </div>
  )
}

export default Home