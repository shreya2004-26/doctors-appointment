"use client"
import CategoryCard from '@/app/_components/CategoryCard'
import { categories } from '@/app/_db/categories'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DoctorsALLCategory = () => {
    const path = usePathname().split('/')[2];
    return (
        <div className='flex flex-col gap-4 w-full '>
            <div className='flex flex-row items-center border-b w-full '>
                <Search className='w-4 h-4 text-gray-500' />
                <Input placeholder='Type a command or search...' className='border-none outline-none text-gray-500 text-sm ' />
            </div>
            <h2 className='text-xs text-slate-500'>Suggestions</h2>
            <div className='flex flex-col gap-4 w-fit'>
                {categories?.map((curr, index) => (
                    <Link href={`/search/${curr?.slug}`} key={index} className={`flex gap-2 items-center  py-2 pr-10 pl-2 rounded-md cursor-pointer ${curr?.slug === path
                        ? 'bg-blue-100 hover:bg-blue-100' : "hover:bg-gray-100"
                        }`}>
                        <Image src={curr?.icon} alt={curr?.title} width={2000} height={100} className='w-[25px] ' />
                        <h2 className='text-sm text-primary'>{curr?.title}</h2>
                    </Link>

                ))}
            </div>

        </div>
    )
}

export default DoctorsALLCategory