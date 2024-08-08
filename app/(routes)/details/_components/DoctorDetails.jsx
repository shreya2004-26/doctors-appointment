import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { LocateIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointmentDialog from './BookAppointmentDialog'

const DoctorDetails = ({ doctor }) => {
    return (
        <div className='flex border p-4 rounded-xl shadow-sm gap-10 items-center'>
            <Image src={doctor?.image?.url ?? "/doctor1.png"} width={2000} height={200} className='w-[280px] h-[280px] object-cover rounded-xl' alt={doctor?.name ?? "doctor"} />
            <div className='flex flex-col gap-2'>
                <h2 className='text-xl font-bold'>{doctor?.name}</h2>
                <h2 className='text-gray-500'>{`${doctor?.experience} of Experience`}</h2>
                <h2 className='text-gray-500'>{doctor?.address}</h2>
                <h2 className='text-xs bg-blue-100 px-2 py-1 text-primary w-fit rounded-full'>{doctor?.categories?.[0].title}</h2>
                <div className='flex gap-2 mt-2'>
                    <Image src='/youtube.png' alt='youtube' width={200} height={100} className='w-[25px]' />
                    <Image src='/linkedin.png' alt='linkedin' width={200} height={100} className='w-[25px]' />
                    <Image src='/twitter.png' alt='twitter' width={200} height={100} className='w-[25px]' />
                    <Image src='/facebook.png' alt='twitter' width={200} height={100} className='w-[25px]' />
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='w-fit rounded-full mt-4'>Book Appointment</Button>
                    </DialogTrigger>
                    <BookAppointmentDialog />
                </Dialog>


            </div>
        </div>
    )
}

export default DoctorDetails