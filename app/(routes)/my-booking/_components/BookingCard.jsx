import { Button } from '@/components/ui/button'
import { Calendar, Clock, LocateFixedIcon, LocateIcon, MapPin } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React, { useState } from 'react'
import { gql, request } from "graphql-request";
import { useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { bookings } from '@/app/_db/bookings'
const BookingCard = ({ doctors, appointment_date, appointment_time }) => {
    const [deleteBookings, setDeleteBookings] = useState(null);
    const doctorId = usePathname().split("/")[2];
    const {user} = useUser();
    console.log("13 ", user)
    const deleteBooking = async()=>{
        const query =
      gql`
               mutation MyMutation {
  deleteManyBookings(
    where: {appointmentDate: "`+appointment_date+`", appointmentTime: "`+appointment_time+`", doctors: {name: "`+doctors?.name+`", address: "`+doctors?.address+`", id: "`+doctorId+`"},id: "`+user?.id+`"}
  ) {
    count
  }
}`
        const resp = await request(
            "https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master",
            query
          );
          console.log("Booking deleted", resp)
          setDeleteBookings(resp)
          console.log("left Bookings ", deleteBooking);
    }
    return (
        <div className='flex gap-5 border py-5 px-8 w-[320px] md:w-[1300px] justify-between rounded-xl '>
            <div className='flex gap-8'>
                <Image src={doctors?.image?.url} width={2000} height={200} className='w-[70px] h-[70px] object-cover rounded-full self-center' alt='no image' />
                <div className='flex flex-col gap-3'>
                    <h2 className='font-bold text-lg'> {doctors?.name}</h2>
                    <h2 className=' flex gap-1 text-gray-500 text-base'>  <MapPin className='w-5 h-5 text-primary' />  {doctors?.address}</h2>
                    <h2 className='flex gap-1 text-sm'><Calendar className='w-4 h-4 text-primary mx-1' />  Appointment On: {moment(appointment_date).format("DD MMM YYYY")}</h2>
                    <h2 className='flex gap-1 text-sm'><Clock className='w-4 h-4 text-primary mx-1' /> At Time : {appointment_time}</h2>
                </div>
            </div>
            <Button onClick={()=>deleteBooking()} variant='ghost' className='hidden lg:block border border-primary text-primary hover:bg-primary hover:text-white self-center'>Cancel Appointment</Button>
        </div>
    )
}

export default BookingCard