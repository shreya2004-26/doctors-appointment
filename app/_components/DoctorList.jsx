import React from 'react'
import DoctorCard from './DoctorCard'
import { doctors } from '../_db/doctors'

const DoctorList = () => {
    return (
        <div className='flex flex-col gap-4 mt-10'>
            <h2 className='font-bold text-xl'>Popular Doctors</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

                {
                    doctors?.map((curr, index) => (
                        <DoctorCard key={index}
                            id={curr?.id}
                            category={curr?.category?.[0]}
                            name={curr?.name}
                            experience={curr?.experience}
                            imgUrl={curr?.imgUrl}
                            address={curr?.address} />
                    ))
                }


            </div>
        </div>
    )
}

export default DoctorList