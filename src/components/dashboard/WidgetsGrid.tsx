'use client'
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { IoCarOutline } from 'react-icons/io5'


export const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count);

  return (
    <>
      <div className='flex flex-wrap p-2 mt-5'>
        <SimpleWidget
          title={`${count}`}
          subtitle='Productos agregados'
          label='Contador'
          icon={<IoCarOutline size={70} className='text-blue-600' />}
          href='/dashboard/counter'
        />
      </div>

    </>
  )
}

