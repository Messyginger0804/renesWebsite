import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai';

// AiOutlineFacebook

function Footer() {
    return (
        <footer >
            <div className='fixed bg-slate-100 w-full h-fit flex items-center px-[10%] bottom-0'>
                <div className='relative'>
                    <img className='w-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUrkzaVgsK757DwuM8gA6dnW3AzsPsgrX8h0AdGoe5vPHPcwnAQVss0z-DmXw24lzg9c&usqp=CAU" alt="dallas logo" />
                </div>
                <div className='grid grid-cols-2 ml-auto'>
                    <a className='hover:scale-105' href='https://www.facebook.com/profile.php?id=100086916005109&mibextid=LQQJ4d'><AiOutlineFacebook className='text-6xl' /></a>
                    <div className='grid ml-auto px-2'>
                        <h2 className='font-bold'>Contact Us</h2>
                        {/* <small>Rene Guillen</small> */}
                        <a className='hover:text-blue-500 hover:underline' href='tel:2147794259'><small>214-779-4259</small></a>

                        <a className='hover:text-blue-500 hover:underline' href='mailto:TFLS@gmail.com'><small>TFLS@gmail.com</small></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer