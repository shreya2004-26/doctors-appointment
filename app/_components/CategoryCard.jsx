import Image from 'next/image'
import React from 'react'

const CategoryCard = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-blue-100 px-12 py-5 rounded-md gap-2'>
            <Image src='/tooth.png' width={2000} height={100} className='w-[40px]' />
            <h2 className='text-xs text-primary'>Dentist</h2>
        </div>
    )
}

export default CategoryCard