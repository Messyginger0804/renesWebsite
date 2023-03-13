import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/logo2.jpg'

function Navbar() {
    return (
        <header>
            <div className='flex items-center flex-wrap flex-grow justify-evenly w-full h-fit bg-slate-100 text-shadow px-[10%]'>
                <div className='relative'>
                    <Link to='/'>
                        <img className='w-[100px]' src={logo2} alt="TFLS-logo" />
                    </Link>
                </div>
                <div className='text-center'>
                    <h1 className='font-lora font-extrabold text-2xl text-center shadow-md shadow-amber-300'>Top Flight Lawn Service</h1>
                </div>



                <div className='text-right ml-auto'>
                    <ul className='flex justify-evenly'>
                        <Link to='/'><li className='p-6 cursor-pointer hover:underline hover:text-blue-500'>home</li></Link>
                        <Link to='/about'><li className='p-6 cursor-pointer hover:underline hover:text-blue-500'>about</li></Link>
                        <Link to='/contact'><li className='p-6 cursor-pointer hover:underline hover:text-blue-500'>conact</li></Link>
                    </ul>
                </div>
            </div>
        </header >
    )
}
export default Navbar