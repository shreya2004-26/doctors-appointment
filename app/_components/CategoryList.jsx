import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryList = () => {
    return (
        <div className='flex flex-col pt-20 items-center gap-8'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-4xl text-center font-bold'>Search <span className='text-primary'>Doctors</span></h2>
                <h2 className='text-lg text-gray-500'>Search Your Doctor and Book Appointment in one click
                </h2>
                <div className='flex gap-2 justify-center mt-2'>
                    <Input placeholder='Search...' />
                    <Button>Search</Button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-6'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    )
}

export default CategoryList