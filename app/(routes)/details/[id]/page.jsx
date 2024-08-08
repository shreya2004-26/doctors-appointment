import React from 'react'
import SuggestionList from '../_components/SuggestionList'
import DoctorDetails from '../_components/DoctorDetails'
import About from '../_components/About'

const page = () => {
    return (
        <div className='grid grid-cols-5 mt-6 gap-5'>
            <div className='col-span-4'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-xl'>Details</h2>
                    <DoctorDetails />
                    <About />
                </div>
            </div>
            <div className='col-span-1'>
                <SuggestionList />
            </div>
        </div>

    )
}

export default page