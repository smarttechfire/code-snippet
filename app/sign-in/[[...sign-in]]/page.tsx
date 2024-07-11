"use client"
import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className=' w-full h-screen flex justify-center items-center max-sm:mt-0'>
      <SignIn />
    </div>
  )
}

export default Page
