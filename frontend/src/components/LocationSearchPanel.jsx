import React from 'react'

const LocationSearchPanel = (props) => {
    {/*` Sample Array for locations `*/}

    const locations=[
        "20A,Near Gate No.4 , AMK BOYS HOSTEL , JMI ",
        "21B,Near Gate No.5 , AMK BOYS HOSTEL , JMI ",
        "22C,Near Gate No.6 , AMK BOYS HOSTEL , JMI ",
        "23D,Near Gate No.7 , AMK BOYS HOSTEL , JMI "
    ]
  return (
    <div>

        {/* This is just a sample data  */}

        {
            locations.map(function(elem,idx){
                return  <div key={idx} onClick={() =>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex border-2 p-3 border-gray-50 active:border-black  rounded-xl items-center my-2 gap-4 justify-start'>
                 <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill "></i></h2>
                 <h4 className='font-medium'> {elem} </h4>
            </div>
            })
        }
       

        
        
    </div>
  )
}

export default LocationSearchPanel