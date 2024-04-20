import { SimpleWidget } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className=''>Información general</span>
      <div className='flex flex-wrap p-2 mt-5'>
        <SimpleWidget/>
      </div>
    </div>
  )
}

export default page
