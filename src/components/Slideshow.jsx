import React from 'react'
import SlideCard from './SlideCard'



function Slideshow() {
    const data = [{
        id: 1,
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo accusantium vero quibusdam molestias minima amet dicta! Porro possimus ullam sunt officiis necessitatibus hic doloremque odio illo saepe expedita. Distinctio?',
        name: 'Dolore'
    },
        // {
        //     id: 2,
        //     review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo accusantium vero quibusdam molestias minima amet dicta! Porro possimus ullam sunt officiis necessitatibus hic doloremque odio illo saepe expedita. Distinctio?',
        //     name: 'Jessica'
        // }, {
        //     id: 3,
        //     review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo accusantium vero quibusdam molestias minima amet dicta! Porro possimus ullam sunt officiis necessitatibus hic doloremque odio illo saepe expedita. Distinctio?',
        //     name: 'Michael'
        // },
    ]
    return (
        <>
            {/* <SlideCard /> */}
            <div className=''>
                {
                    data.map((data) => (
                        // data.name
                        <SlideCard key={data.id} data={data} />
                    ))
                }
            </div>
            {/* <h1>hello</h1> */}
        </>
    )
}

export default Slideshow