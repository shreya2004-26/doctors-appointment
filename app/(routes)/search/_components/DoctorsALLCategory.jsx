import CategoryCard from '@/app/_components/CategoryCard'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DoctorsALLCategory = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row items-center border-b'>
                <Search className='w-4 h-4 text-gray-500' />
                <Input placeholder='Type a command or search...' className='border-none outline-none text-gray-500 text-sm ' />
            </div>
            <h2 className='text-xs text-slate-500'>Suggestions</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center hover:bg-blue-100 py-2 pr-10 pl-2 rounded-md'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[25px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
                <div className='flex gap-2 items-center hover:bg-blue-100 py-2 pr-10 pl-2 rounded-md'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[25px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
                <div className='flex gap-2 items-center hover:bg-blue-100 py-2 pr-10 pl-2 rounded-md'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[25px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
                <div className='flex gap-2 items-center hover:bg-blue-100 py-2 pr-10 pl-2 rounded-md'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[25px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
                <div className='flex gap-2 items-center hover:bg-blue-100 py-2 pr-10 pl-2 rounded-md'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[25px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
                <div className='flex gap-2 items-center hover:bg-blue-100 py-2 pr-10 pl-2 rounded-md'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[25px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
                <div className='flex gap-2 items-center hover:bg-blue-100 py-2 pr-10 pl-2 rounded-md'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[25px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
                <div className='flex gap-2 items-center hover:bg-blue-100 py-2 pr-10 pl-2 rounded-md'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[25px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
            </div>

        </div>
    )
}

export default DoctorsALLCategory