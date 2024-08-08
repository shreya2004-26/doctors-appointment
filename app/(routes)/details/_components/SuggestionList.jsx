import React from 'react'
import SuggestionCard from './SuggestionCard'
import { doctors } from '@/app/_db/doctors'

const SuggestionList = ({ id }) => {
    return (
        <div className='flex flex-col gap-3 mt-9 border rounded-xl shadow-sm  py-3'>
            <h1 className='font-semibold px-5 text-[15px]'>Suggestions
            </h1>
            {
                doctors?.filter((curr) => {
                    return curr?.id != id
                })?.map((curr, index) => {
                    return <SuggestionCard key={index} category={curr?.category[0]} name={curr?.name} experience={curr?.experience} imgUrl={curr?.imgUrl} />

                })
            }
        </div>
    )
}

export default SuggestionList