import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='p-4 flex flex-col md:flex-row h-[calc(100vh-3rem)] gap-4 md:gap-0 mt:10 md:mt-0 text-sm md:text-base  text-green-600 '>
        <div className='flex-1 flex flex-col justify-center gap-2 text-justify lg:pl-3 xl:pl-20 '>
            <h2 className='text-center text-base md:text-lg font-bold'> About us:</h2>
      <p>Loving Hut - Light Light Industry (Taiwan) Limited was founded in October 2008, along the principle of creating innovative, 
      tasty and completely pure vegan food for a fast growing and discerning world market.</p> 
      <p>Our company and large production facility is owned and managed by vegans and every step of the way 
        is safeguarded to ensure maximum hygiene, optimum quality and minimal environmental impact. 
      We only manufacture vegan and NON-GMO food, and also have a wide range of GLUTEN FREE products. Tailor-made products are available under clients request.</p>
       <p>Peace starts from our dining table, let&apos;s together make our planet great again.</p>
      </div>
        

      <div className='flex-1 flex flex-col justify-center items-center gap-4'>
      <div className=' flex flex-col items-center justify-center'>
        <h2 className='text-base md:text-lg font-bold mb-2'>We work:</h2>
        <div className='flex gap-4 w-60 justify-between'><p>Monday</p><p>closed</p></div>
        <div className='flex gap-4 w-60 justify-between'><p>Tuesday:</p> <p>11:00 - 20:30</p></div>
        <div className='flex gap-4 w-60 justify-between'><p>Wednesday:</p> <p>11:00 - 20:30</p></div>
        <div className='flex gap-4 w-60 justify-between'><p>Thursday:</p> <p>11:00 - 20:30</p></div>
        <div className='flex gap-4 w-60 justify-between'><p>Friday:</p> <p>11:00 - 20:30</p></div>
        <div className='flex gap-4 w-60 justify-between'><p>Saturday:</p> <p>12:00 - 20:30</p></div>
        <div className='flex gap-4 w-60 justify-between'><p>Sunday:</p> <p>13:00 - 20:00</p></div>
      </div>
        <div className='flex gap-1 items-center'>
            <Image src="/location.png" width={20} height={20} alt=''/>
        <p>Kolmas Linja 17, Helsinki, Finland, 00530</p>
        </div>
      </div>

    </div>
  )
}

export default AboutPage
