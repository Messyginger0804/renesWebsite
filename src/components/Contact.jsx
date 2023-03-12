import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// MdEmail


// FaPhoneVolume

function Contact() {
    const sendEmail = (e) => {
        // e.preventDefault();

        // emailjs.sendForm('service_yykgw9e', 'template_s2t184g', form.current, '_0eJeVE_0upDw61qU')

    };
    return (
        // <div className='grid grid-cols-2 gap-8'>
        <div className='flex flex-wrap justify-center gap-8 my-[10%]'>
            <div>
                <form onSubmit={sendEmail} className='flex-col px-grow '
                // ref={form} onSubmit={sendEmail(e)}
                >
                    <div className='shadow-lg shadow-blue-50'>
                        <input className='resize-none w-full p-1 border-2 border-green-700' type='text' name='name' placeholder='full name' required />
                        <input className='resize-none w-full p-1 border-2 border-green-700' type='email' name='email' placeholder='youremail@email.com' required />
                        <textarea className='resize-none w-full p-1 border-2 border-green-700' name='message' rows='7' placeholder='your message' required></textarea>
                    </div>
                    <button type="submit" className='hover:bg-white bg-green-800 p-2 text-yellow-200 border-2 border-sky-400'>Send Message</button>
                </form>
            </div>
            <div className='pb-20 flex flex-col gap-3 justify-center items-center md:visible'>
                <h1 className='text-6xl font-bold'>Rene Guillen</h1>
                <small>Owner</small>
                <a className='flex align-center text-center gap-2 items-center text-xl hover:underline' href=''><FaPhoneVolume className='text-2xl hover:underline' />214-779-4259</a>
                <a className='flex align-center gap-2 items-center text-xl hover:underline' href=''><MdEmail className='text-2xl' />TFLS@gmai.com</a>
            </div>
        </div>
    )
}

export default Contact