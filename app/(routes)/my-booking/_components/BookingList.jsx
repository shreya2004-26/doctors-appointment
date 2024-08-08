import React from 'react'
import BookingCard from './BookingCard'

const BookingList = () => {
    return (
        <div className=' flex flex-col gap-5 w-full '>

            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
        </div>
    )
}

export default BookingList