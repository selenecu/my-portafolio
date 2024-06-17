'use client'
import { testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'

const Clients =() => {
  return (
    <div className='py-20' id="projects">
      <h1 className='heading'>
        Trusted by 
        <span className='text-purple'>
        satisfied clients
        </span>
      </h1>
      <div className='flex flex-col items-center'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
        <InfiniteMovingCards
        items={testimonials}
        direction= 'right'
        speed = "slow"
        />
        </div>
      </div>
    </div>
  )
}
export default Clients