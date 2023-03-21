import React from 'react'
import '../Home.css'
import Slideshow from './Slideshow'

function Home() {
    return (
        // <main className='min-h-screen'>
        // <div className='mt-2'
        // style='background-image: url("https://media.istockphoto.com/id/479426374/photo/lawn-mower.jpg?s=612x612&w=0&k=20&c=5R0YQA4V-ePnn1m6KxPYyonZgfZYPaVk3V0Gjh1xkxI=" )'
        // >
        <div className='grid grid-rows-2'>

            <img className='w-full' src="https://media.istockphoto.com/id/479426374/photo/lawn-mower.jpg?s=612x612&w=0&k=20&c=5R0YQA4V-ePnn1m6KxPYyonZgfZYPaVk3V0Gjh1xkxI=" alt="landscaping-photo" />
            <div className='text-center md:py-6'>
                <div className='text-center rounded-x shadow-yellow-300 text-slate-100 shadow-xl hover:shadow-yellow-100'>
                    <p className='italic'>
                        "I recently hired the team at Top Flight Lawn Services to take care of my lawn, and I couldn't be happier with the results! The crew was professional, courteous, and efficient, and they did an amazing job transforming my patchy, weedy lawn into a lush, green oasis. And best of all, their prices are very competitive compared to other lawn care services in the area. I would highly recommend Top Flight Lawn Services to anyone looking for top-quality lawn care!",
                    </p>
                    <small>-Debra</small>
                    {/* <p className='text-5xl font-bold'>HEY RENE THIS WOULD BE A REVIEW</p> */}
                </div>
            </div>
            {/* <Slideshow /> */}
        </div>
        // </div>
        // </main>
    )
}

export default Home