"use client"
import React from 'react'
import Header from './_components/Header'

const Provider = ({ children }) => {
    return (
        <>
            <Header />
            <div className='container py-5 px-8'>
                {children}
            </div>
        </>
    )
}

export default Provider