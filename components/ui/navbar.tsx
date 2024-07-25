import React from 'react'
import Link from 'next/link'
import Menu from './menu'

const Navbar = () => {
  return (
    <header
    className="flex h-[80px] py-4 items-center justify-between md:h-[100px]"
>
    <div className="flex items-center gap-3">
      <Link href="/">
        <span className='text-white text-xl font-semibold'>
            embuildr
        </span>
      </Link>
    </div>

    <Menu />
  </header>
  )
}

export default Navbar