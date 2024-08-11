import React, { useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import { doctors } from '@/app/_db/doctors'
import { gql, request } from "graphql-request"
const SuggestionList = ({ id }) => {
    const [doctors, setDoctors] = useState(null);

    useEffect(() => {
        getSuggestedDoctors();
    }, [])

    const getSuggestedDoctors = async () => {
        const query = gql`
        query MyQuery {
  doctors(where: {id_not: "`+ id + `"}) {
    name
    id
    experience
    categories {
      title
    }
    image {
      url
    }
  }
}
        `
        const resp = await request("https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master", query);
        // console.log(resp)
        setDoctors(resp?.doctors)

    }
    return (
        <div className='flex flex-col gap-3 md:mt-9 border rounded-xl shadow-sm py-3 w-full'>
            <h1 className='font-semibold px-5 text-[15px]'>Suggestions
            </h1>
            {
                doctors?.map((curr, index) => {
                    return <SuggestionCard key={index} category={curr?.categories[0].title} name={curr?.name} experience={curr?.experience} imgUrl={curr?.image?.url} />

                })
            }
        </div>
    )
}

export default SuggestionList