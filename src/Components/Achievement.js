import React from 'react'
import StarImg from "../assets/star.jfif"

const Achievement = () => {
  return (
    <section className=' '>
        <h1 className="flex justify-center rounded-lg text-3xl bg-gray-600 text-white">ACHIEVEMENTS</h1>
    <div>
        <div className='flex md:flex-row'>
           <img className="size-20 " src={StarImg} alt="" />
            <h1 className='py-6 md:text-2xl text-[20px] font-semibold'>II-Prize for our Department Project Expo for III-year</h1>
        </div>
      
         <div className='flex md:flex-row'>
            <h2 className=' mb-10 md:text-2xl text-[20px] px-5 md:mr-60'>St.Joseph college of Engineering,Chennai</h2>
            <h1 className=' md:text-2xl text-[20px] font-bold px-4 '>NOV 2023</h1>
        </div>
       <hr className='border-1 border-black'></hr>
    </div>
    <div>
        <div className='flex'>
           <img className="size-20 " src={StarImg} alt="" />
            <h1 className='py-6 md:text-2xl text-[20px] font-semibold'>I-Prize for College Level Sports Day in Atheletics </h1>
        </div>
      
         <div className='flex'>
            <h2 className=' mb-10 md:text-2xl text-[20px] px-5 md:mr-60 '>St.Joseph College Of Engineering,Chennai</h2>
            <h1 className=' md:text-2xl text-[20px] font-bold px-5'>FEB 2023</h1>
        </div>
        <hr className='border-1 border-black'></hr>
    </div>
    <div>
        <div className='flex'>
           <img className="size-20 " src={StarImg} alt="" />
            <h1 className='py-6 md:text-2xl  text-[20px] font-semibold'>Participation in Two Day Workshop Web Development</h1>
        </div>
      
         <div className='flex'>
            <h2 className=' mb-10 md:text-2xl text-[20px] px-5 md:mr-60 '>St.Joseph college of Engineering,Chennai</h2>
            <h1 className=' md:text-2xl text-[20px] font-bold px-5'>DEC 2024</h1>
        </div>
     
    </div>
   
   </section>
    
        
    
  )
}

export default Achievement