import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'


const page = () => {
    return (
        <div className='max-w-full'>
            <h1 className='text-2xl font-bold mb-5'>My Booking</h1>
            <Tabs defaultValue="upcoming" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="upcoming">Upcomming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming"><BookingList tabValue="upcoming" /></TabsContent>
                <TabsContent value="expired"><BookingList tabValue="expired" /></TabsContent>
            </Tabs>

        </div>
    )
}

export default page