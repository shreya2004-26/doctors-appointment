import { Button } from '@/components/ui/button'
import { Calendar, Clock, LocateFixedIcon, LocateIcon, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BookingCard = () => {
    return (
        <div className='flex gap-5 border py-5 px-8 w-[1300px] justify-between rounded-xl '>
            <div className='flex gap-8'>
                <Image src='/doctor6.jpg' width={2000} height={200} className='w-[70px] h-[70px] object-cover rounded-full self-center' alt='no image' />
                <div className='flex flex-col gap-3'>
                    <h2 className='font-bold text-lg'> Dr. Tom Cook</h2>
                    <h2 className=' flex gap-1 text-gray-500 text-base'>  <MapPin className='w-5 h-5 text-primary' />  547 Carrington Trace Drive, Cornelius</h2>
                    <h2 className='flex gap-1 text-base'><Calendar className='w-5 h-5 text-primary' />  Appointment On:07-Aug-2024</h2>
                    <h2 className='flex gap-1 text-sm'><Clock className='w-5 h-5 text-primary' /> At Time : 1:00 PM</h2>
                </div>
            </div>
            <Button variant='ghost' className='border border-primary text-primary hover:bg-primary hover:text-white self-center'>Cancel Appointment</Button>
        </div>
    )
}

export default BookingCard