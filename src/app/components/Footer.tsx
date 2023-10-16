import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:pl-3 xl:pl-20 text-yellow-500 flex items-center justify-between'>
      <Link className='font-bold' href="/">Loving Hut</Link>
      <p>ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer
