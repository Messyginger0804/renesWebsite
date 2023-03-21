import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpg'

// AiOutlineFacebook

function Footer() {
    return (
        <footer >
            <div className='bg-black w-full h-fit flex items-center px-[15%] bottom-0 text-slate-100'>
                <div className='relative'>
                    <Link to='/'>
                        <img className='w-[100px]' src={logo} alt="dallas logo" />
                    </Link>
                </div>
                <div className='grid grid-cols-2 ml-auto'>
                    <a className=' hover:cale-105' href='https://www.facebook.com/profile.php?id=100086916005109&mibextid=LQQJ4d'><AiOutlineFacebook className='text-6xl' /></a>
                    <div className='grid ml-auto px-2'>
                        <h2 className='font-bold'>Contact Us</h2>
                        {/* <small>Rene Guillen</small> */}
                        <a className='hover:text-blue-500 hover:underline' href='tel:2147794259'><small>214-779-4259</small></a>

                        <a className='hover:text-blue-500 hover:underline' href='mailto:mowtopflight@gmail.com'><small>mowtopflight@gmail.com</small></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer