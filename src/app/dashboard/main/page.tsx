import { SimpleWidget } from '@/components'
import React from 'react'


export const metadata = {
 title: 'Admin dashboard',
 description: 'Admin Dashboard',
};

const page = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl text-center'>Dashboard</h1>
      <span>Información general</span>
      <div className='flex flex-wrap p-2 mt-5'>
        <SimpleWidget/>
      </div>
    </div>
  )
}

export default page
