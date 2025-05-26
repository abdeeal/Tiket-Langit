import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='w-full flex justify-between px-8 py-4 top-0 left-0 fixed text-white items-center'>

      <div className='flex flex-col font-righteous text-2xl tracking-wider'>
        <a className=''>Tiket</a>
        <a>Langit</a>
      </div>

      <div className='flex gap-4'>
        <Link to={"/"}>Home</Link>
        <Link to={"#"}>Destinations</Link>
        <Link to={"#"}>About Us</Link>
      </div>

      <div>
        <Link to={"#"}>Login</Link>
      </div>
    </nav>
  )
}
