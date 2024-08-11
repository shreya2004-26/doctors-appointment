"use client"
import { gql, request } from 'graphql-request'
import React, { useEffect, useState } from 'react'
import DoctorsALLCategory from '../_components/DoctorsALLCategory'
import DoctorsSortedList from '../_components/DoctorsSortedList'
import { usePathname } from 'next/navigation'
import { doctors } from '@/app/_db/doctors'

const page = () => {
    const slug = usePathname().split("/")[2];
    const [doctors, setDoctors] = useState(null);
    useEffect(() => {
        getSortedDoctorsList();
    }, [])

    const getSortedDoctorsList = async () => {
        const query = gql`
        query MyQuery {
  doctors(where: {categories_some: {slug: "`+ slug + `"}}) {
    name
    id
    image {
      url
    }
    experience
    address
    categories {
      title
    }
  }
}
        `
        const resp = await request("https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master", query)
        console.log(resp)
        setDoctors(resp?.doctors)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>
            <DoctorsALLCategory className='col-span-1' />
            <div className='col-span-4'>
                <h2 className='text-xl font-bold capitalize'>{slug}</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    {
                        doctors?.map((curr, index) => {
                            return (
                                <DoctorsSortedList key={index} data={curr} />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default page