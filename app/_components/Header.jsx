import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const { user } = useUser();
    // console.log(user);
    return (
        <div className='px-4 md:px-20'>
            <div className='flex justify-between py-5 px-2 items-center border-b-0 shadow-sm '>
                <div className='flex gap-8 items-center'>
                    <Link href={"/"}>
                        <Image src='/logo.svg' width={200} height={30} className='w-[150px] md:w-[180px]' alt='logo' />
                    </Link>
                    <Link href={'/my-booking'} className='hidden lg:block text-primary border border-gray-100 py-1 px-2 cursor-pointer rounded-full bg-blue-50 hover:bg-primary hover:text-white'>My Bookings</Link>
                </div>

                {/* If user is signed in */}
                <SignedIn>
                    <UserButton />
                </SignedIn>
                {/* If user is sign out */}
                <SignedOut>
                    <Button>
                        <SignInButton />
                    </Button>
                </SignedOut>

            </div>
        </div>
    )
}

export default Header