import Image from 'next/image'
import React from 'react'

const SuggestionCard = () => {
    return (
        <div className='flex gap-4 p-5'>
            <Image src='/doctor1.jpg' width={2000} height={200} className='w-[70px] h-[70px] rounded-full object-cover' />
            <div className='flex flex-col gap-2'>
                <h2 className='text-xs text-primary bg-blue-100 px-2 py-1 w-fit rounded-full'>Dentist</h2>
                <h2 className='text-sm font-semibold'>Dr. Jane Cooper</h2>
                <h2 className='text-xs text-primary'>12 Years</h2>
            </div>
        </div>
    )
}

export default SuggestionCard