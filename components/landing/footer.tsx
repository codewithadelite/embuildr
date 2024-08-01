import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative mx-auto max-w-3xl '>
        <p className='text-center text-slate-400 mt-6 mb-6'>
            Made with ❤️ by {" "}
            <Link href="https://niyonshuti.org" target='blank'>
                Adelite Niyonshuti Shema
            </Link>
        </p>
    </footer>
  )
}

export default Footer