import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CartIcon = () => {
  return (
    <Link href='/cart' className='flex items-center gap-1'>
        <div className='relative w-6 h-6'>
            <Image src="/cart-icon.png" alt="" fill />
        </div>
        <span>Cart {3}</span>
    </Link>
  )
}

export default CartIcon
