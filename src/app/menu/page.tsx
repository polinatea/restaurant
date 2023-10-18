import React from 'react'
import { menu } from '../data'
import Link from 'next/link'
import Image from 'next/image'
import CategoryButtons from '../components/CategoryButtons'

const MenuPage = () => {
  return (
    <div className='p-4  '>
      <h1 className='text-center'>Menu</h1> 
      <CategoryButtons />
      <div className=" flex flex-wrap">
        {menu.map(item=>(
        <div className=' w-full h-[60vh] flex flex-col items-center justify-center border-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <div className='relative h-[60%] w-full '>
            <Image src="/fruit-salad.png" alt="" fill className='object-contain'/>
          </div>
          <div className='p-4'>
            <h1 className='font-bold'>{item.title}</h1>
            <p>Desc</p>
            <span className='font-bold'>Price</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}


export default MenuPage
