"use client"
import CategoryCard from '@/app/_components/CategoryCard'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {gql, request} from "graphql-request"
import { Skeleton } from '@/components/ui/skeleton'

const DoctorsALLCategory = () => {
    const [categories, setCategories] = useState(null);
    const path = usePathname().split('/')[2];
    useEffect(()=>{
        getAllCategories();
    },[])
    const getAllCategories = async() =>{
        const query = gql`
        query MyQuery {
  categories {
    id
    slug
    title
    icon {
      url
    }
  }
}
        `
        const res = await request("https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master", query)
        // console.log("category 27 ", res)
        setCategories(res?.categories)
    }
    
    return (
        <div className='flex flex-col gap-4 w-full '>
            <div className='flex flex-row items-center border-b w-full '>
                <Search className='w-4 h-4 text-gray-500' />
                <Input placeholder='Type a command or search...' className='border-none outline-none text-gray-500 text-sm ' />
            </div>
            <h2 className='text-xs text-slate-500'>Suggestions</h2>
            <div className='flex flex-col gap-5 w-fit'>
                {categories==null? Array.from({length:9}).map((curr,index)=>{
                    return ( <Skeleton key={index} className="w-[180px] h-[50px]" />
                    )
                }):categories?.map((curr, index) => (
                    <Link href={`/search/${curr?.slug}`} key={index} className={`flex gap-2 items-center  py-2 pr-10 pl-2 rounded-md cursor-pointer ${curr?.slug === path
                        ? 'bg-blue-100 hover:bg-blue-100' : "hover:bg-gray-100"
                        }`}>
                        <Image src={curr?.icon?.url} alt={curr?.title} width={2000} height={100} className='w-[25px] ' />
                        <h2 className='text-sm text-primary'>{curr?.title}</h2>
                    </Link>

                ))}
            </div>

        </div>
    )
}

export default DoctorsALLCategory