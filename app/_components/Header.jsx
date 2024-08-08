import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const { user } = useUser();
    // console.log(user);
    return (
        <div className='px-20'>
            <div className='flex justify-between py-5 px-2 items-center border-b-0 shadow-sm '>
                <div className='flex gap-8'>
                    <Link href={"/"}>
                        <Image src='/logo.svg' width={200} height={30} className='w-[180px]' alt='logo' />
                    </Link>
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