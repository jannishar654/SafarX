import React ,{useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

      const finishRidePanelRef = useRef(null)
    
       const [finishRidePanel , setFinshRidePanel] = useState(false)


    useGSAP(function() {
    if(finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
       transform: 'translateY(0)',
      })
    } else{
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)',
       })
    }

  }, [finishRidePanel])

  return (
   <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className="w-16 " src="/HomeLogo.png" alt="Home Logo" />
        <Link  to='/home' className='  h-10 w-4 bg-white flex items-center justify-center rounded-full '>
          <i className=' text-lg font-medium ri-logout-box-r-line' ></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img className='h-full w-full object-cover ' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Home Page" />

      </div>

      <div className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative"
      onClick={ () =>{
        setFinshRidePanel(true)
      }}
      >
      <h5 className='p-1 text-center w-[95%] absolute top-0'
       onClick={() =>{
       
       }}
        > <i className=' text-3xl text-black-200 ri-arrow-up-wide-line'> </i></h5>
      <h4 className='text-xl font-semibold'> 4 KM away </h4>
      <button className= " mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg "> Complete Ride </button>

     

      </div>

     <div ref={finishRidePanelRef} className="fixed z-10 w-full h-screen bottom-0  translate-y-full bg-white px-3 py-10 pt-12">
      <FinishRide setFinishRidePanel={setFinshRidePanel} />
     </div>

      

    </div>
  )
}

export default CaptainRiding