// import React from 'react'
// import Image from 'next/image'
// import { products } from '../data'

// const Featured = () => {
//   return (
//     <div className='w-screen overflow-x-scroll text-yellow-500'>
//       <div className='w-max flex'>
//       {products.map((product)=>(
//         <div key={product.id} className='w-screen h-[60vh] flex flex-col justify-around items-center md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
//           {product.img && (
//           <div className='relative flex-1 w-full hover:rotate-[360deg] transition-all duration-300'>
//             <Image src={product.img} alt="" fill className='object-contain'/>
//           </div>
//           )}
//           <div className='flex-1 flex flex-col gap-4 items-center justify-center'>
//             <h1 className='font-bold text-xl xl:text-2xl 2xl:text-3xl'>{product.title}</h1>
//             <p className='p-4 2xl:p-8 text-center'>{product.desc}</p>
//             <span className='text-xl font-bold'>${product.price}</span>
//             <button className='bg-yellow-500 text-white p-2 rounded-md'>Add</button>
//           </div>
//         </div>
//         ))}
//       </div>
      
//     </div>
//   )
// }

// export default Featured
