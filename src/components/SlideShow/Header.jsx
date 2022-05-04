import React from 'react'

export default function Header({ header }) {
  return (
    <div className='text-3xl md:text-5xl lg:text-7xl font-bold max-w-[20ch] text-center text-light'>{header}</div>
  )
}
