import React from 'react'
import { menu, Menu } from '../data';

interface CategoryButtonsProps {
    uniqueCategories: string[];
    filterMenu: (category:string) => void;
    setItems: (menuData:Menu[]) => void;
  };


const CategoryButtons = (props: CategoryButtonsProps) => {

  return (
    <div className='flex items-center justify-center gap-3 md:gap-5 lg:gap-10 h-12 max-[360px]:gap-1'>
        <button onClick = {() => props.setItems(menu)} className='bg-green-600 py-[5px] px-[7px] text-sm text-white rounded-md max-[360px]:py-[3px] max-[360px]:px-[5px]'>
            All
        </button>
        {props.uniqueCategories.map((category,id)=>(
        <button onClick={()=>props.filterMenu(category)} key={id} className='bg-green-600 py-[5px] px-[7px] text-sm text-white rounded-md capitalize max-[360px]:py-[3px] max-[360px]:px-[5px]'>
            {category}
        </button>
       ))}
    </div>
    )
}
export default CategoryButtons
