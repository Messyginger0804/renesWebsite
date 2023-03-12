import React from 'react'
import '../Home.css'

function Home() {
    return (
        // <main className='min-h-screen'>
        // <div className='mt-2'
        // style='background-image: url("https://media.istockphoto.com/id/479426374/photo/lawn-mower.jpg?s=612x612&w=0&k=20&c=5R0YQA4V-ePnn1m6KxPYyonZgfZYPaVk3V0Gjh1xkxI=" )'
        // >
        <div className='grid grid-rows-2'>
            <img className='w-full' src="https://media.istockphoto.com/id/479426374/photo/lawn-mower.jpg?s=612x612&w=0&k=20&c=5R0YQA4V-ePnn1m6KxPYyonZgfZYPaVk3V0Gjh1xkxI=" alt="landscaping-photo" />
            <div className='text-center'>
                <ul className='font-bold'>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
            </div>
        </div>
        // </div>
        // </main>
    )
}

export default Home