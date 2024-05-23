import React from 'react'
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'

const header = ({width}) => {
  return (
   <header className='flex justify-between w-100% h-15 p-2 text-3xl  font-sarif text-center text-black font-bold bg-teal-500 '>My portfolio
    <h1 className=' text-black' >
   {width <768 ? <FaMobileAlt />
   : width <992 ? <FaTabletAlt />
     :<FaLaptop />}
     
     </h1>
   
   </header>
  )
}

export default header