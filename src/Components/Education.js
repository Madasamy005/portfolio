import React from 'react'
import SchoolImg from "../assets/images.jpeg"
import CollegeImg from "../assets/college1.jfif"

const Education = () => {
  return (
    <section >
    <h1 className="flex justify-center text-3xl bg-gray-600 rounded-lg text-white">EDUCATIONS</h1>
<div className="flex flex-col md:flex-row text-center p-5 justify-center">
     <div className='md:w-1/2 text-[20px] md:text-2xl '>
      <img className="size-52 mx-auto block" src={SchoolImg} alt="" />
      <h1 className=' font-bold ' >Schaffter Higher Secondary school</h1>
      <h1  className=' font-semibold '>Tirunelveli</h1>
      <li >SSLC :86.3%</li>
      <li >HSC :78.6%</li>
     <hr className='mt-10 pt-5 md:mt-0 border-1 border-black md:border-none'></hr>
     </div>
     <div className='md:w-1/2 text-[20px] md:text-2xl text-center'>
      <img className='size-52 mx-auto block' src={CollegeImg} alt="" />
      <h1 className=' font-bold'>ST.Joseph College of Engineering</h1>
      <h1 className=' font-semibold'>Chennai</h1>
      <h3 >Treasure of CSE Department and Class Representative Studying Computer science and Engineering with 8.34CGPA </h3>

     </div>
     </div>
    </section>
   
  
  )
}

export default Education