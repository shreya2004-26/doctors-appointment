import { Button } from '@/components/ui/button'
import { UserCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='px-20'>
            <div className='flex justify-between py-5 px-2 items-center border-b-0 shadow-sm '>
                <div className='flex gap-8'>
                    <Image src='/logo.svg' width={200} height={30} className='w-[180px]' />
                    <div className='flex gap-8 pt-2 text-[15px]'>
                        <h2 className='hover:text-primary hover:scale-105 cursor-pointer'>Home</h2>
                        <h2 className='hover:text-primary hover:scale-105 cursor-pointer'>Explore</h2>
                        <h2 className='hover:text-primary hover:scale-105 cursor-pointer'>Contact Us</h2>
                    </div>
                </div>
                {/* <UserCircle className='w-7 h-7' /> */}
                <Button> Get Started</Button>

            </div>
        </div>
    )
}

export default Header