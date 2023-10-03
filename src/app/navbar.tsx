import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex bg-gray-800 py-2 px-5">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex text-blue-500 space-x-3 cursor-pointer ml-5">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/about/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
