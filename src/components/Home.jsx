import React from 'react'
import '../Home.css'
import Slideshow from './Slideshow'

function Home() {
    return (
        // <main className='min-h-screen'>
        // <div className='mt-2'
        // style='background-image: url("https://media.istockphoto.com/id/479426374/photo/lawn-mower.jpg?s=612x612&w=0&k=20&c=5R0YQA4V-ePnn1m6KxPYyonZgfZYPaVk3V0Gjh1xkxI=" )'
        // >
        <div className='grid grid-rows-2 my-[10%]'>

            <img className='w-full' src="https://media.istockphoto.com/id/479426374/photo/lawn-mower.jpg?s=612x612&w=0&k=20&c=5R0YQA4V-ePnn1m6KxPYyonZgfZYPaVk3V0Gjh1xkxI=" alt="landscaping-photo" />
            <div className='text-center p-6'>
                <div className='text-center w-fit rounded-x shadow-yellow-300 text-slate-100 shadow-xl hover:shadow-yellow-100 md:p-6'>
                    <p className=''>
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo accusantium vero quibusdam molestias minima amet dicta! Porro possimus ullam sunt officiis necessitatibus hic doloremque odio illo saepe expedita. Distinctio?",
                    </p>
                    <small>Dolore</small>
                </div>
            </div>
            {/* <Slideshow /> */}
        </div>
        // </div>
        // </main>
    )
}

export default Home