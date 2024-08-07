import CategoryCard from '@/app/_components/CategoryCard'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const DoctorsALLCategory = () => {
    return (
        <div className='flex flex-col gap-2 w-1/4'>
            <Input placeholder='Type a command or search...' />
            <h2 className='text-xs text-slate-500'>Suggestions</h2>
            <div>
                <div className='flex gap-2 items-center'>
                    <Image src='/tooth.png' width={2000} height={100} className='w-[30px] ' />
                    <h2 className='text-sm text-primary'>Dentist</h2>
                </div>
            </div>

        </div>
    )
}

export default DoctorsALLCategory