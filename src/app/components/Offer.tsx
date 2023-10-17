import React from 'react'
import Image from 'next/image'
const Offer = () => {
  return (
    <div className='bg-green-900 h-screen flex flex-col md:flex-row '>
      <div className="flex-1 flex flex-col  justify-center items-center gap-8 p-6 text-center">
        <h1 className='text-white text-5xl font-bold xl:text-6xl '>Veggie cookie</h1>
        <p className='text-white xl:text-xl'> Home-made delicious cookie with natural soft organic cream</p>
        <button className='bg-yellow-500 p-2 rounded-md'>Buy now!</button>
      </div>
      <div className="flex-1 w-full relative">
        <Image src="/sweet1-no-bg.png" alt="" fill className='object-contain'/>
      </div>
      
    </div>
  )
}

export default Offer
