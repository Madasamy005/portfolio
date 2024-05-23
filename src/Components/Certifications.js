import React from 'react'
import GuviImg from "../assets/guvi.jfif"
import CiscoImg from "../assets/cisco.jfif"
import SoloLearn from '../assets/sololearn.jfif'
import IITBOMPAY from "../assets/IIT.jfif"
import SimpliLearn from "../assets/simplilearn.jfif"

const Certifications = () => {
  return (
    <section>
          <h1 className="flex justify-center text-3xl rounded-lg bg-gray-600 text-white">CERTIFICATIONS</h1>
          <div>
            <div className='flex text-[20px] md:text-2xl px-5'>
                <img className='size-20' src={GuviImg} alt="" />
                <h1 className='md:mr-20 py-3 px-3 md:py-7 font-bold'>Course Certificate for FullStack Development</h1>
                <div className='flex justify-end'>
                <h2 className='font-semibold py-7 px-14'>GUVI</h2>
                </div>
             
            </div>
            <hr className='border-1 border-black'></hr>
            <div className='flex text-[20px] md:text-2xl px-5'>
                <img className='size-24 md:size-20 px-1' src={CiscoImg} alt="" />
                <h1 className='md:mr-60 py-3 px-3 md:py-7 font-bold'>Course Certificate for JavaScript</h1>
                <h2 className='font-semibold py-7 px-12'>CISCO</h2>
             
            </div>
            <hr className='border-1 border-black'></hr>
            <div className='flex text-[20px] md:text-2xl px-5 '>
                <img className='size-20 md:size-20 px-3 ' src={SoloLearn} alt="" />
                <h1 className='md:mr-36 py-3  md:py-7 font-bold'>Course Certificate for FrontEnd Development</h1>
                <h2 className=' font-semibold md:py-7 px-3 py-5'>SoloLearn</h2>
             
            </div>
            <hr className='border-1 border-black'></hr>
           
            <div className='flex text-[20px] md:text-2xl px-5 '>
                <img className='size-24 md:size-20  px-3 py-5 ' src={IITBOMPAY} alt="" />
                <h1 className='md:mr-48 py-3 md:py-7 font-bold'>IIT BOMBAY Certified for Many Courses</h1>
                <h2 className='font-semibold md:py-7 px-5 py-3 pl-5'>IIT Bombay</h2>
             
            </div>
            <hr className='border-1 border-black'></hr>
            <div className='flex text-[20px] md:text-2xl px-5 '>
                <img className='size-20 px-3 ' src={SimpliLearn} alt="" />
                <h1 className='md:mr-64 py-3 font-bold'>Course Certificate for Web Design </h1>
                <h2 className='font-semibold py-3 px-3'>SimpliLearn</h2>
             
            </div>
           
           </div>
          
    </section>
  )
}

export default Certifications