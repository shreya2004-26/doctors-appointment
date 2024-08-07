import React from 'react'
import Hero from './_components/Hero'
import CategoryList from './_components/CategoryList'
import DoctorList from './_components/DoctorList'

function page() {
  return (
    <div>
      <Hero />
      <CategoryList />
      <DoctorList />
    </div>
  )
}

export default page