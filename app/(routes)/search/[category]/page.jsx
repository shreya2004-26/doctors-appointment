"use client"
import React from 'react'
import DoctorsALLCategory from '../_components/DoctorsALLCategory'
import DoctorsSortedList from '../_components/DoctorsSortedList'
import { usePathname } from 'next/navigation'
import { doctors } from '@/app/_db/doctors'

const page = () => {
    const path = usePathname().split("/")[2];
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>
            <DoctorsALLCategory className='col-span-1 ' />
            <div className='col-span-4'>
                <h2 className='text-xl font-bold capitalize'>{path}</h2>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        doctors?.filter((curr) => {
                            const p = path.charAt(0).toUpperCase() + path.substring(1); // convert slug to capitalize
                            return curr?.category?.includes(p)
                        })?.map((curr, index) => {
                            return (
                                <DoctorsSortedList key={index} data={curr} />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default page