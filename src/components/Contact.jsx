import React, { useRef } from 'react'
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_0fdj2mx', 'template_s2t184g', form.current, '_0eJeVE_0upDw61qU')
        e.target.reset();

    };

    // className = 'text-xl group-hover:scale-150 duration-500 cursor-pointer'
    return (
        // <div className='grid grid-cols-2 gap-8'>
        <div className='flex flex-wrap justify-center gap-8 my-[10%]'>
            <div>
                <form className='flex-col px-grow text-xl group-hover:scale-150 duration-500 cursor-pointer'
                    ref={form} onSubmit={sendEmail & toast.success(`thank you for you message!!!`)}
                >
                    <div className='shadow-lg shadow-blue-50'>
                        <input className='resize-none w-full p-1 border-2 border-green-700' type='text' name='name' placeholder='full name' required />
                        <input className='resize-none w-full p-1 border-2 border-green-700' type='email' name='email' placeholder='youremail@email.com' required />
                        <textarea className='resize-none w-full p-1 border-2 border-green-700' name='message' rows='7' placeholder='your message' required></textarea>
                    </div>
                    <button type="submit" className='rounded hover:bg-white hover:text-black bg-black p-2 text-slate-200 border-2 border-[gold]'>Send Message</button>
                    <ToastContainer
                        limit={1}
                        position="top-left"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        draggable
                        pauseOnHover
                        theme="dark" />
                </form>
            </div>
            <div className='pb-20 flex flex-col gap-3 justify-center items-center md:visible'>
                <h1 className='text-6xl font-bold text-[rgb(255,255,255,2)]'>Rene Guillen</h1>
                <small className='text-slate-100'>Owner</small>
                <a className='flex align-center text-center gap-2 items-center text-xl hover:underline text-slate-100' href=''><FaPhoneVolume className='text-2xl hover:underline text-slate-100' />214-779-4259</a>
                <a className='flex align-center gap-2 items-center text-xl hover:underline text-slate-100' href=''><MdEmail className='text-2xl' />mowtopflight@gmail.com</a>
            </div>

        </div>
    )
}

export default Contact