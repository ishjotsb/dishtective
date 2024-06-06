import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className='px-12 py-4 flex justify-between items-center bg-[#1A4D2E]'>
        <h1 className='font-jaro text-5xl px-8 text-[#fefded]'><Link to="/">Dishtective</Link></h1>
        <nav className='px-8'>
            <ul className='flex gap-4 text-[#fefded]'>
                <li>Lorem.</li>
                <li>Harum?</li>
                <li>Sunt.</li>
                <li>Recusandae.</li>
            </ul>
        </nav>
    </header>
  )
}
