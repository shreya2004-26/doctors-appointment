import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SuggestionCard = ({id,  name, imgUrl, experience, category }) => {
    return (
        <Link href={`/details/${id}`} className='flex gap-4 p-5'>
            <Image src={imgUrl} alt={name} width={2000} height={200} className='w-[70px] h-[70px] rounded-full object-cover' />
            <div className='flex flex-col gap-2'>
                <h2 className='text-xs text-primary bg-blue-100 px-2 py-1 w-fit rounded-full'>{category}</h2>
                <h2 className='text-sm font-semibold'>{name}</h2>
                <h2 className='text-xs text-primary'>{experience}</h2>
            </div>
        </Link>
    )
}

export default SuggestionCard