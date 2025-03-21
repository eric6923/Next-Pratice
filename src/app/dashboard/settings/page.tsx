'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter();
  function handleback(){
    router.push('/dashboard')
  }
  return (
    <div>
      <h1>Settings Page</h1>
      <button className='bg-blue-500 text-white rounded py-2 px-4 font-bold' onClick={handleback}>Back</button>
    </div>
  )
}

export default page
