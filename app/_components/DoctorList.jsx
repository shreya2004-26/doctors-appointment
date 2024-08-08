"use client"
import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
import { gql, request } from "graphql-request"
const DoctorList = () => {
    const [doctors, setDoctors] = useState();
    useEffect(() => {
        getDoctorsList()
    }, [])

    const getDoctorsList = async () => {
        //create a graphql query
        const query = gql`query MyQuery {
  doctors {
  id
    about
    address
    closingTime
    name
    openingTime
    image {
      url
    }
    categories {
      title
    }
  }
}`;
        //then request data from hygraph by using backend url and query
        const resp = await request("https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master", query);
        // console.log(resp?.doctors)
        setDoctors(resp?.doctors)
    }

    return (
        <div className='flex flex-col gap-4 mt-10'>
            <h2 className='font-bold text-xl'>Popular Doctors</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

                {
                    doctors?.map((curr, index) => (
                        <DoctorCard key={index}
                            id={curr?.id}
                            category={curr?.categories?.[0].title}
                            name={curr?.name}
                            experience={curr?.experience}
                            imgUrl={curr?.image?.url}
                            address={curr?.address} />
                    ))
                }


            </div>
        </div>
    )
}

export default DoctorList