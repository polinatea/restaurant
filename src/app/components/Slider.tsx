"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
const Slider = () => {
    const data = [
        {
            id:1,
            title: "always green and always veggie",
            image: "/cafe.jpg",
        },
        {
            id:2,
            title: "always welcome",
            image: "/table.jpg",
        }
    ]
    const [currentSlide,setCurrentSlide] = useState(0);

    useEffect(() =>{
        const interval = setInterval (
            ()=>setCurrentSlide((prev) => (prev===data.length-1) ? 0 : prev+1)
            ,2000
        );
        return()=>clearInterval(interval);
    },[])

  return (
    <div className='flex flex-col h-[calc(100vh-3rem)] lg:flex-row'>
        <div className='flex-1 flex items-center justify-center flex-col gap-8 text-yellow-500 font-bold'>
            <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>
            {data[currentSlide].title}
            </h1>
            <button className=' bg-red-500 text-white py-4 px-8'>Order now</button>
        </div>
    <div className='w-full flex-1 relative '>
       <Image src={data[currentSlide].image} alt='' fill className='object-cover'/>
    </div>
    </div>
  )
}

export default Slider
