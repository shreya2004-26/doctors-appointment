import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DoctorCard = () => {
    return (
        <div className='flex flex-col gap-2 border p-4 rounded-xl hover:border-primary
        '>
            <Image src='/doctor1.jpg' width={2000} height={200} alt='doctor' className='w-full h-[250px] rounded-xl' />
            <h2 className='text-[10px] bg-blue-100 py-1 px-2 w-fit text-primary rounded-2xl mt-2'>Dentist</h2>
            <h2 className='font-bold'>Dr. Jane Cooper</h2>
            <h2 className='text-sm text-primary'>12 Years</h2>
            <h2 className='text-gray-500 text-sm'>547 Carrington Trace Drive, Cornelius</h2>
            <Button variant='ghost' className='border
             text-primary rounded-full hover:bg-primary hover:text-white'>Book Now</Button>
        </div>
    )
}

export default DoctorCard