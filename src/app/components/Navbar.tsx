import React from 'react';
import Menu from './Menu';
import Link from "next/link";
import CartIcon from './CartIcon';
import Image from 'next/image';
const Navbar = () => {

  const user = false;

  return (
    <div className='h-12 md:h-24 text-[#FFDD19] p-4 flex items-center justify-between border-b-2 border-b-[#FFDD19] uppercase '>

      <div className='hidden md:flex gap-4 flex-1 lg:pl-3 xl:pl-20'>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">About</Link>
      </div>

      <div className='text-lg md:font-bold flex-1 md:text-center lg:text-left'>
        <Link href="/">Loving Hut</Link>
      </div>

      <div className='md:hidden'>
        <Menu />
      </div>


      <div className='hidden md:flex md:flex-col lg:flex-row gap-4 items-center flex-1 justify-center'>
        <div className='flex items-center gap-2 cursor-pointer bg-red-500 rounded-lg p-1 md:absolute top-14 r-2 lg:static'>
          <Image src="/phone-icon.png" alt="" width={20} height={20}/>
          <span>+358 00 0000000</span>
        </div>
        <div className='flex md:absolute top-6 r-3 lg:static'>
        {!user ? (
          <Link href="/login">Login</Link>
        ):(
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon/>
        </div>
      </div>


    </div>
  )
}

export default Navbar