import { Input } from '@/components/ui/input'
import React from 'react'
import DoctorsALLCategory from '../_components/DoctorsALLCategory'
import DoctorCard from '@/app/_components/DoctorCard'
import DoctorsSortedList from '../_components/DoctorsSortedList'

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>
            <DoctorsALLCategory className='col-span-1 ' />
            <div className='col-span-4'>
                <h2 className='text-xl font-bold'>Dentist</h2>
                <div className='grid grid-cols-4 gap-5'>
                    <DoctorsSortedList />
                    <DoctorsSortedList />
                    <DoctorsSortedList />
                    <DoctorsSortedList />
                    <DoctorsSortedList />
                    <DoctorsSortedList />
                </div>
            </div>
        </div>
    )
}

export default page