'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function page() {
  const search=useSearchParams();
  return (
    <div>page</div>
  )
}

export default page