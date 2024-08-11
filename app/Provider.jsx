"use client"
import React from 'react'
import Header from './_components/Header'


const Provider = ({ children }) => {
    return (
        <>
            <Header />
            <div className='md:container md:py-5 md:px-8 px-6'>
                {children}
            </div>
            
        </>
    )
}

export default Provider