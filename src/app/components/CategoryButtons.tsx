import React from 'react'
import { menu } from '../data';
import Menu from './Menu';
interface CategoryButtonsProps {
    uniqueCategories: string[];
    filterMenu: (category:string) => void;
    setItems: (menu:string[]) => void;
  };


const CategoryButtons = (props: CategoryButtonsProps) => {

  return (
    <div className='flex items-center gap-2 h-12'>
        <button onClick = {() => props.setItems(menu)} className='bg-green-600 p-1 text-sm text-white rounded-md'>
            All
        </button>
        {props.uniqueCategories.map((category,id)=>(
        <button onClick={()=>props.filterMenu(category)} key={id} className='bg-green-600 p-1 text-sm text-white rounded-md'>
            {category}
        </button>
       ))}
    </div>
    )
}
export default CategoryButtons
