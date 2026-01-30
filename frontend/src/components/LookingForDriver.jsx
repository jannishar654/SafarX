import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0'
                onClick={() => {
                    props.setVehicleFound(false)
                }}
            > <i className=' text-3xl text-gray-200 ri-arrow-down-wide-line'> </i></h5>
            <h3 className='text-3xl font-semibold mb-5'>
                Looking For a Driver </h3>

            <div className="flex  gap-2 justify-between flex-col items-center">
                <img className="h-20" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n" alt="Car" />
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



        </div>
    )
}

export default LookingForDriver