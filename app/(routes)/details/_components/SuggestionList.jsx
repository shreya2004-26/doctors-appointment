import React from 'react'
import SuggestionCard from './SuggestionCard'

const SuggestionList = () => {
    return (
        <div className='flex flex-col gap-3 mt-9 border rounded-xl shadow-sm  py-3'>
            <h1 className='font-semibold px-5 text-[15px]'>Suggestions
            </h1>
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
        </div>
    )
}

export default SuggestionList