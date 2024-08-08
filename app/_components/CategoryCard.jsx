import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryCard = ({ image, title, slug }) => {
    return (
        <Link href={`/search/${slug}`} className='flex flex-col justify-center items-center bg-blue-50 px-12 py-5 rounded-md gap-2 hover:scale-110 cursor-pointer'>
            <Image src={image} alt={title} width={2000} height={100} className='w-[40px]' />
            <h2 className='text-xs text-primary'>{title}</h2>
        </Link>
    )
}

export default CategoryCard