import { Input } from '@/components/ui/input'
import React from 'react'
import DoctorsALLCategory from '../_components/DoctorsALLCategory'
import DoctorCard from '@/app/_components/DoctorCard'

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <DoctorsALLCategory className='w-1/2' />
            <div className='grid grid-cols-3'>
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

export default page