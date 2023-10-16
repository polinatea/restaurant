"use client";
import React, {useState} from 'react'
import Image from "next/image"
import Link from 'next/link';
import CartIcon from './CartIcon';
const Menu = () => {
  const [open,setOpen] = useState(false);

  const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "About", url: "/about"},
  ]

  const user = false;
  return (
    <div >
        {!open ? (
            <Image src="/menu-button.png" alt="" width={20} height={20} onClick={()=>setOpen(true)}/>
        ): (
        <Image src="/menu-button-close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>
        )}
      {open &&(
        <div className='bg-yellow-500 text-white absolute left-0 top-12 w-full h-[calc(100vh-3rem)] flex flex-col items-center text-3xl z-10'>
        {links.map(item=>(
          <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
        ))} 
        {!user ? <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>:
        <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>}
        <Link href="/cart" onClick={()=>setOpen(false)}>
          <CartIcon />
        </Link>
      </div>
      )}

      

    </div>
  )
}

export default Menu
