import React , {use, useState} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {
   const navigate= useNavigate(); 

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')  
    
    
    const [captainData , setCaptainData] = useState({})


    const { captain , setCaptain } = React.useContext(CaptainDataContext)
    
    const submitHandler = async (e) => {
      e.preventDefault();

    const captainData = {
        fullname:{
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity:vehicleCapacity,
          vehicleType:vehicleType
        } 
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

      if(response.status === 201){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token)
        
        navigate('/captain-home');
      }
  
      
      
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')

    }
  return (
   <div className='p-7 flex flex-col justify-between h-screen'>
         <div>
           <img className='w-16 mb-10' src="/HomeLogo.png" alt="Logo" />
           <div className='bg-white pb-5 py-4 px-2'></div>
         <form onSubmit={(e) =>{
           submitHandler(e)
         }}>
           <h3 className='text-lg w-full font-medium mb-2'> What's your name Captain</h3>
           <div className='flex gap-4 mb-6'>
             <input
              required
             
              className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
              type="text" 
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} 
             />
              <input
              required
             
              className='bg-[#eeeeee]  rounded px-4 py-2 border  text-lg placeholder:text-base'
              type="text" 
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} 
              />
   
           </div>
           <h3 className='text-lg font-medium mb-2'> What's your email</h3>
           <input
              required
             
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email" 
              placeholder="abc@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
   
           <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
           <input 
              required 
             
                className='bg-[#eeeeee] mb-6 rounded px-4 py-2border w-full text-lg placeholder:text-base'
              type="password" 
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

              <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
           <input
              required
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="text" 
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
           />
           <input
              required
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="text" 
              placeholder="Vehicle Plate Number"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
           />
           <input
              required
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="number" 
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
           />
           <select
              required
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
           >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
           </select>
              
           <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-base placeholder:text-sm'
           >Create Captain account </button>
   
           <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'> Login here </Link></p>
         </form>
         </div>
   
         <div>
           <p className='text-[13px] flex justify-center leading-tight'> This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy </span> and <span className='underline'> Terms of Service apply</span>.</p>
         </div>
       </div>
  )
}

export default CaptainSignup