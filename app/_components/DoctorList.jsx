import React from 'react'
import DoctorCard from './DoctorCard'

const DoctorList = () => {
    return (
        <div className='flex flex-col gap-4 mt-10'>
            <h2 className='font-bold text-xl'>Popular Doctors</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
            </div>
        </div>
    )
}

export default DoctorList