import React from 'react'
import BookingCard from './BookingCard'
import { bookings } from '@/app/_db/bookings'

const BookingList = () => {
    return (
        <div className=' flex flex-col gap-5 w-full '>
            {bookings?.map((curr, index) => {
                return (
                    <BookingCard key={index}
                        id={curr?.id}
                        userName={curr?.userName}
                        doctors={curr?.doctors}
                        appointment_date={curr?.appointment_date}
                        appointment_time={curr?.appointment_time} />
                )
            })}


        </div>
    )
}

export default BookingList