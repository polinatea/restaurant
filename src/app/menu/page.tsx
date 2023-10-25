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
      <h1 className='text-center text-xl font-bold text-green-600 md:text-2xl lg:text-4xl'>Our menu</h1> 
      <CategoryButtons 
      uniqueCategories= {uniqueCategories}
      filterMenu = {filterMenu}
      setItems = {setItems}
      />
      <div className=" flex flex-wrap ">
        {items.map(item=>(
        <div key={item.id}  className=' w-full h-[60vh]  sm:w-1/2 md:w-1/3 xl:w-1/4 p-2'>
          <div className='w-full h-full flex flex-col items-center justify-center relative border-2 border-grey-50 rounded-md'>
          <div className='font-bold text-xl absolute left-5 top-5 text-yellow-500'>${item.price}</div>
          {item.img && (
          <div className='relative h-[60%] w-full pt-3'>
            <Image src={item.img} alt="" fill className='object-contain'/>
          </div>
          )}
          <div className=' flex flex-col justify-center items-center text-yellow-500'>
            <h1 className='font-bold text-xl'>{item.title}</h1>
            <p className='h-14 text-center inline-block align-middle text-sm'>{item.desc}</p>
            
          </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}


export default MenuPage
