import MaddyImg from '../assets/maddy.png'
import { AiOutlineFacebook, AiOutlineInstagram,  AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row p-10 justify-center bg-primary'>
            <div className='md:w-1/3'>
                <img className='rounded-full p-10 md:size-100  ' src={MaddyImg} />
            </div>


            <div className='md:w-1/2 px-20 md:px-10 md:m-28  '>
                <h1 className='text-6xl mr-42 md:text-8xl  text-white font-mono'>MADASAMY P
                    <p className='text-2xl md:text-4xl'>WEB DEVELOPER|PROGRAMMER</p>
                </h1>
                <div className='flex py-5 '>
                    <a href="#" className=' pr-3 hover:text-white'><AiOutlineInstagram size={50} /></a>
                    <a href="#" className=' pr-3 hover:text-white'><AiOutlineGithub size={50} /></a>
                    <a href="#" className=' pr-3  hover:text-white'><AiOutlineLinkedin size={50} /></a>
                    <a href="#" className='pr-3 hover:text-white'><AiOutlineFacebook size={50} /></a>
                <button className=' hover:text-white bg-teal-500 rounded-lg px-2 ' type='click'>Resume</button>
                </div>
            </div>
        </section>
    )
}