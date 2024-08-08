import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'


const page = () => {
    return (
        <div className='max-w-full'>
            <h1 className='text-2xl font-bold mb-5'>My Booking</h1>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Upcomming</TabsTrigger>
                    <TabsTrigger value="password">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="account"><BookingList /></TabsContent>
                <TabsContent value="password"><BookingList /></TabsContent>
            </Tabs>

        </div>
    )
}

export default page