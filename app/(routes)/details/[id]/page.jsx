"use client"
import React, { useEffect, useState } from 'react'
import SuggestionList from '../_components/SuggestionList'
import DoctorDetails from '../_components/DoctorDetails'
import About from '../_components/About'
import { usePathname } from 'next/navigation'
import { gql, request } from "graphql-request"
import { Skeleton } from '@/components/ui/skeleton'

const page = () => {
    const path = usePathname().split('/')[2];
    const [doctor, setDoctor] = useState(null);
    useEffect(() => {
        getDoctorDetails();
    }, [])

    const getDoctorDetails = async () => {
        const query = gql`
        query MyQuery {
        doctor(where: {id: "`+ path + `"}) {
    about
    address
    experience
    categories {
      title
    }
    id
    name
    openingTime
    image {
      url
    }
    closingTime
  }
}
        `
        const resp = await request("https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master", query);
        // console.log(resp?.doctor)
        setDoctor(resp?.doctor);

    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 mt-6 gap-5'>
            <div className='col-span-3 md:col-span-4'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-xl'>Details</h2>
                    { doctor==null? <Skeleton className="w-[1064px] h-[330px] rounded-xl" />
                    :<DoctorDetails doctor={doctor} />}
                    {doctor==null? <Skeleton className="w-[1064px] h-[255px] rounded-xl" />
                        :<About data={doctor?.about} />}
                </div>
            </div>
            <div className='col-span-2 md:col-span-1'>
                <SuggestionList id={path} />
            </div>
        </div>

    )
}

export default page