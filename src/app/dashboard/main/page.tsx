import React from 'react'
import {WidgetsGrid} from '@/components/dashboard/WidgetsGrid';


export const metadata = {
 title: 'Admin dashboard',
 description: 'Admin Dashboard',
};

const page = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl text-center'>Dashboard</h1>
      <span>Información general</span>
     <WidgetsGrid/>
    </div>
  )
}

export default page
