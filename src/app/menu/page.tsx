"use client"
import React, {useState} from 'react'
import { menu } from '../data'
import Link from 'next/link'
import Image from 'next/image'
import CategoryButtons from '../components/CategoryButtons'

const MenuPage = () => {
  const [items, setItems] = useState(menu);
  const uniqueCategoriesSet = new Set<string>();
  menu.forEach(item => {
    uniqueCategoriesSet.add(item.cat);
  });
  const uniqueCategories: string[] = Array.from(uniqueCategoriesSet);

  const filterMenu = (category:string) => {
    const filteredItems = menu.filter((newItems) => newItems.cat === category);
    setItems(filteredItems);
  }

  return (
    <div className='p-4 flex flex-col gap-3 '>
      <h1 className='text-center text-xl font-bold text-red-500 md:text-2xl lg:text-4xl'>Menu</h1> 
      <CategoryButtons 
      uniqueCategories= {uniqueCategories}
      filterMenu = {filterMenu}
      setItems = {setItems}
      />
      <div className=" flex flex-wrap border-t-2 border-l-2 border-yellow-400">
        {items.map(item=>(
        <div key={item.id}  className=' w-full h-[60vh] flex flex-col items-center justify-center  border-b-2 border-r-2 border-yellow-400  sm:w-1/2 md:w-1/3 xl:w-1/4'>
          {item.img && (
          <div className='relative h-[60%] w-full pt-3'>
            <Image src={item.img} alt="" fill className='object-contain'/>
          </div>
          )}
          <div className=' flex flex-col justify-center items-center text-yellow-500'>
            <h1 className='font-bold text-xl'>{item.title}</h1>
            <p className='h-14 text-center inline-block align-middle text-sm'>{item.desc}</p>
            <span className='font-bold text-xl'>${item.price}</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}


export default MenuPage
