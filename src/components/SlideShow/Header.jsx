import React from 'react'

export default function Header({ header }) {
  return (
    <div className='text-6xl font-black max-w-[20ch] text-center text-primary tracking-widest leading-20'>{header}</div>
  )
}
