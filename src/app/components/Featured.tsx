import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-yellow-500'>
      <div className='w-max flex'>
        <div className='w-screen h-[60vh] flex flex-col justify-around items-center'>
          <div className='relative flex-1 w-full'>
            <Image src="/salad1.jpg" alt="" fill/>
          </div>
          <div className='flex-1'>
            <h1> Title</h1>
            <p>Desc</p>
            <span>Price</span>
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
