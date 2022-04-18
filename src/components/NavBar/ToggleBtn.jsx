import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function ToggleBtn({ state, setState }) {
  return (
    <>
    <FaBars onClick={() => setState(prev => !prev)}
      className={state 
        ? 'hidden' 
        : 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer'} />

    <FaTimes onClick={() => setState(prev => !prev)}
      className={state 
        ? 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer hover:rotate-180' 
        : 'hidden'} />
    </>
  )
}
