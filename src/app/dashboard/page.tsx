'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter();
    function handleback(){
        router.push('/')
    }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button className='bg-blue-500 text-white font-bold py-2 px-2 rounded' onClick={handleback}>Back</button>
    </div>
  )
}

export default page
