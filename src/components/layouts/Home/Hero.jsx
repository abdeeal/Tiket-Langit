import React from 'react'
import santoriniBg from "../../../../public/Images/santorini-bg.webp"

export const Hero = () => {
  return (
    <div className='w-full max-h-dvh overflow-hidden relative -z-10'>
      <div className='w-full h-full absolute top-0 left-0 bg-black/10' />
      <img src={santoriniBg} alt="" className='w-full aspect-[16/9] object-cover'/>
    </div>
  )
}
