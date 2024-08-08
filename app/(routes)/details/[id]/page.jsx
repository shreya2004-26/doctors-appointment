"use client"
import React from 'react'
import SuggestionList from '../_components/SuggestionList'
import DoctorDetails from '../_components/DoctorDetails'
import About from '../_components/About'
import { usePathname } from 'next/navigation'
import { doctors } from '@/app/_db/doctors'

const page = () => {
    const path = usePathname().split('/')[2];
    console.log(path - 1);
    const doctor = doctors[path - 1];
    console.log(doctor)
    return (
        <div className='grid grid-cols-5 mt-6 gap-5'>
            <div className='col-span-4'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-xl'>Details</h2>
                    <DoctorDetails doctor={doctor} />
                    <About data={doctor?.about_me} />
                </div>
            </div>
            <div className='col-span-1'>
                <SuggestionList id={path} />
            </div>
        </div>

    )
}

export default page