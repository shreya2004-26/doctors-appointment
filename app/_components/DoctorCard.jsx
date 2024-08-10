"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const DoctorCard = ({ id, name, category, address, experience, imgUrl }) => {
    const router = useRouter();
    return (
        <div className='flex flex-col gap-2 border p-4 rounded-xl hover:border-primary
        '>
            <Image src={imgUrl} width={2000} height={200} alt='doctor' className='w-full h-[200px] object-cover rounded-xl' />
            <h2 className='text-[10px] bg-blue-100 py-1 px-2 w-fit text-primary rounded-2xl mt-2'>{category}</h2>
            <h2 className='font-bold'>{name}</h2>
            <h2 className='text-sm text-primary'>{experience}</h2>
            <h2 className='text-gray-500 text-sm'>{address}</h2>
            {/* {console.log("id ", id)} */}
            <Button onClick={() => router.push(`/details/${id}`)} variant='ghost' className='border 
             text-primary rounded-full hover:bg-primary hover:text-white border-primary'>Book Now</Button>
        </div>
    )
}

export default DoctorCard