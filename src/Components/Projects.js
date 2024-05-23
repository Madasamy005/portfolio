import React from 'react'
import TodoImg from "../assets/to-do123.png"
import SocialImg from "../assets/social.jfif"
import PfImg from "../assets/pf.jfif"
import InstaImg from "../assets/insta.jfif"
import FoodImg from "../assets/food.jfif"
import WeatherImg from "../assets/weather.jfif"

const Projects = () => {
  return (
   <section>
     <h1 className="flex justify-center rounded-lg text-3xl bg-gray-600 text-white">PROJECTS</h1>
   <div className=' cursor-pointer'>
      <div className='flex'>
          <div className='flex text-[20px] md:text-2xl px-5'>
                <img className='size-20 py-3' src={PfImg} alt="" />
                <h1 className='md:mr-60 mr-5 py-5 px-3 md:py-3 text-blue-500 font-semibold'>Professional Portfolio</h1>
            </div>
            <div>
            <h2 className='font-semibold md:text-2xl text-[20px]  py-5 pl-20'>React Js</h2>
            </div>
        </div>
            <hr className='border-1 border-black'></hr>
        <div className='flex'>
            <div className='flex text-[20px] md:text-2xl px-5'>
                <img className='size-20 py-3' src={SocialImg} alt="" />
                <h1 className='md:mr-72 mr-16 px-3 py-5 md:py-3 text-blue-500 font-semibold'>Social Media App</h1>
            </div>
            <div>
            <h2 className='font-semibold md:text-2xl text-[20px] py-5 pl-16'>React Js</h2>
            </div>
        </div>
            <hr className='border-1 border-black'></hr>
       <div className='flex'>
            <div className='flex text-[20px] md:text-2xl px-5'>
                <img className='size-20 py-3' src={TodoImg} alt="" />
                <h1 className='md:mr-60 py-5 md:py-3 px-3 text-blue-500 font-semibold'>To-Do-List</h1>
            </div>
            <div>
                <h2 className='font-semibold md:text-2xl text-[20px] py-5 pl-48'>React Js</h2>
            </div>
        </div>    
            <hr className='border-1 border-black'></hr>
        <div className='flex'>
            <div className='flex text-[20px] md:text-2xl px-5'>
                <img className='size-20 py-3' src={InstaImg} alt="" />
                <h1 className='md:mr-52 py-5 md:py-3 px-3 text-blue-500 font-semibold'>Instagram FrontEnd Clone</h1>
            </div>
            <div>
            <h2 className='font-semibold md:text-2xl text-[20px] py-5 pl-12'>Html,Css,JS</h2>
            </div>
        </div>
            <hr className='border-1 border-black'></hr>
            <div className='flex'>
            <div className='flex text-[20px] md:text-2xl px-5'>
                <img className='size-20 py-3' src={FoodImg} alt="" />
                <h1 className='md:mr-56 py-5 md:py-3 px-3 text-blue-500 font-semibold'>Food-Cart Application</h1>
                
            </div>
            <div>
            <h2 className='font-semibold md:text-2xl text-[20px]  py-5 pl-20'>Tailwind Css</h2>
             
            </div>
            </div>
            <hr className='border-1 border-black'></hr>
            <div className='flex text-'>
            <div className='flex text-[20px] md:text-2xl px-5'>
                <img className='size-20 py-3' src={WeatherImg} alt="" />
                <h1 className='md:mr-56 py-5 md:py-3 px-3 text-blue-500 font-semibold'>Weather Forecast APP</h1>
                
             
            </div>
            <div>
            <h2 className='font-semibold md:text-2xl text-[20px] py-5 pl-20'>Html,Css,JS</h2>
            </div>
            </div>
   </div>
   </section>
  )
}

export default Projects