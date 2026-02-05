import React , { useState, useRef} from 'react'
import axios from 'axios'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel.jsx'
import VehiclePanel from '../components/VehiclePanel.jsx'
import ConfirmRide from '../components/ConfirmRide.jsx'
import LookingForDriver from '../components/LookingForDriver.jsx'
import WaitingForDriver from '../components/WaitingForDriver.jsx'


const Home = () => {
   const [pickup, setPickup] = useState('')
   const[destination, setDestination] = useState('')
   const [panelOpen, setPanelOpen] = useState (false)
   const panelRef=useRef(null)
   const vehiclePanelRef=useRef (null)
   const confirmRidePanelRef=useRef (null)
   const vehicleFoundRef=useRef (null)  
   const panelCloseRef=useRef (null)
   const WaitingForDriverRef =useRef (null)


   const[vehiclePanel , setVehiclePanel] = useState (false)
   const[confirmRidePanel , setConfirmRidePanel] = useState (false)
   const[vehicleFound , setVehicleFound] = useState (false) 
   const [waitingForDriver , setWaitingForDriver] = useState (false)  
   const [ pickupSuggestions, setPickupSuggestions ] = useState([])
   const [ destinationSuggestions , setDestinationSuggestions] = useState([])
   const [ activeField , setActiveField] = useState(null)
   const [fare, setFare] = useState({})

  const handlePickupChange = async (e) => {
  setPickup(e.target.value)
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
      params: {
        input: e.target.value
      },
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setPickupSuggestions(response.data)
  } catch (err) {
    // handle error
  }
}

const handleDestinationChange = async (e) => {
  setDestination(e.target.value)
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
      params: {
        input: e.target.value
      },
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setDestinationSuggestions(response.data)
  } catch (err) {
    // handle error
  }
}


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

   useGSAP(function() {
    if(confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
       transform: 'translateY(0)',
      })
    } else{
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
       })
    }

  }, [confirmRidePanel])

  useGSAP(function() {
    if(vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
       transform: 'translateY(0)',
      })
    } else{
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
       })
    }

  }, [vehicleFound])

   useGSAP(function() {
    if(waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
       transform: 'translateY(0)',
      })
    } else{
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(100%)',
       })
    }

  }, [waitingForDriver])

 async function findTrip(){
      setVehiclePanel(true)
      setPanelOpen(false)

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,{
         params: {pickup,destination},
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
      })

      setFare(response.data)

      
 }
 
async  function createRide(vehicleType){
     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create` ,{
      pickup,
      destination,
      vehicleType
     },{
       headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
     })

     console.log(response.data)
 }

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
        onClick ={() => {
          setPanelOpen(true)
          setActiveField('pickup')

        } }
        value={pickup}
        onChange={handlePickupChange}
        
        className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'  
        type="text" 
        placeholder ='Add a pick-up location'  />
        <input 
        onClick ={() => {
          setPanelOpen(true)
          setActiveField('destination')
        } }
        value={destination}
          onChange={handleDestinationChange}
        className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full' 
        type="text" 
        placeholder='Enter your destination' />
      </form>
      <button 
      onClick={findTrip}
      className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
        Find Trip
      </button>
      </div>
      <div ref ={panelRef} className='h-[70%] bg-white h-0  '>
        <LocationSearchPanel 
          suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField} 
        />

      </div>
     </div>
     <div ref={vehiclePanelRef} className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
      <VehiclePanel 
      createRide={createRide}
      fare ={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
     </div>

      <div ref={confirmRidePanelRef} className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
      <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}  />
     </div>

     <div ref={vehicleFoundRef} className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
       <LookingForDriver setVehicleFound={setVehicleFound} />
     </div>

     <div  ref={WaitingForDriverRef} className="fixed z-10 w-full bottom-0  bg-white px-3 py-6 pt-12">
       <WaitingForDriver waitingForDriver={waitingForDriver} />
     </div>

    </div>
  )
}

export default Home