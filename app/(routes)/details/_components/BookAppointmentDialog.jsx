"use client"

import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { CalendarRange, Clock } from "lucide-react"

const BookAppointmentDialog = () => {
    const [date, setDate] = useState(new Date());
    return (
        <DialogContent className="max-w-[700px] h-[600px]">
            {/* <DialogHeader>
                <DialogTitle>Book Appointment</DialogTitle>
            </DialogHeader> */}
            <div className="flex flex-col  gap-2">
                <h1 className="font-semibold text-xl">Book Appointment</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 p-2 gap-5 mt-3'>
                    <div className="cols-span-1 flex flex-col gap-3">

                        <h2 className=" flex gap-2 text-sm text-gray-500">  <CalendarRange className="text-primary w-5 h-5" /> Select Date</h2>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-xl border w-full"
                        />
                    </div>
                    <div className=" flex flex-col gap-3">

                        <h2 className="flex gap-2 text-sm text-gray-500"> <Clock className="text-primary w-5 h-5" /> Select Time Slot</h2>
                        <div className='grid grid-cols-3 gap-3 border rounded-xl w-full px-5 py-3 cursor-pointer text-gray-500 text-sm'>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">10:00 AM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">10:30 AM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">11:00 AM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">11:30 AM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">12:00 AM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">12:30 AM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">1:00 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">1:30 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">2:00 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">2:30 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">3:00 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">3:30 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">4:00 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">4:30 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">5:00 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">5:30 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">6:00 PM</h2>
                            <h2 className="border rounded-full px-1 py-2 hover:bg-primary hover:text-white text-center">6:30 PM</h2>
                        </div>
                    </div>
                </div>
                <Textarea placeholder='Note' className='resize-none' />

            </div>
            <DialogFooter>
                <Button variant='ghost' className='border border-red-500 text-red-500 hover:text-black'>Close</Button>
                <Button type="submit">Submit</Button>
            </DialogFooter>
        </DialogContent>
    )
}

export default BookAppointmentDialog