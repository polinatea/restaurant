import React from 'react'

const CategoryButtons = () => {
    const categories = [
        {id: 1, title: "Starters", cat: "starters"},
        {id: 2, title: "Main courses", cat: "main"},
        {id: 3, title: "Drinks", cat: "drinks"},
        {id: 4, title: "Desserts", cat: "desserts"},
      ]
  return (
    <div className='flex items-center gap-2 h-12'>
        <button className='bg-green-600 p-1 text-sm text-white rounded-md'>All</button>
        {categories.map(category=>(
            <button key={category.id} className='bg-green-600 p-1 text-sm text-white rounded-md'>{category.title}</button>
        ))}
        
    </div>
    )
}
export default CategoryButtons
