import React from 'react';
import Menu from './Menu';
import Link from "next/link";
// import CartIcon from './CartIcon';
import Image from 'next/image';
const Navbar = () => {

  const user = false;

  return (
    <div className='h-12 md:h-24 text-yellow-500 p-4 flex items-center justify-between border-b-2 border-b-yellow-500 uppercase '>

      <div className='hidden md:flex gap-4 flex-1 lg:pl-3 xl:pl-20 text-lg lg:text-xl'>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
      </div>

      <div className=''>
        <Link href="/" className='flex-1 flex flex-row items-center justify-center'>
          <Image src="/logo.png" width={100} height={100} alt="" className='hidden md:inline-flex'/> 
          <h1 className='text-lg md:font-bold  md:text-center lg:text-left '>
            Loving Hut
          </h1>
        </Link>
      </div>

      <div className='md:hidden'>
        <Menu />
      </div>


      <div className='hidden md:flex gap-4 items-center flex-1 justify-end lg:pr-3 xl:pr-20'>
        <div className='flex items-center gap-2 cursor-pointer bg-red-500 rounded-lg p-1 md:static text-white'>
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span className='text-yellow-300'>+358 00 0000000</span>
        </div>
      </div>


    </div>
  )
}

export default Navbar
