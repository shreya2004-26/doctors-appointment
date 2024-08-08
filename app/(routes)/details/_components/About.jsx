import React from 'react'

const About = ({ data }) => {
    return (
        <div className='flex flex-col gap-3 border p-4 rounded-xl shadow-sm'>
            <h2 className='font-bold text-xl'>About Me</h2>
            <p className='text-gray-500 text-[15px]'>{data}</p>
        </div>
    )
}

export default About