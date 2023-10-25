import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:pl-3 xl:pl-20 bg-yellow-500 flex items-center justify-between text-white'>
      <Link className='font-bold' href="/">Loving Hut</Link>
      <p>ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer
