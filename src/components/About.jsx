import React from 'react'

function About() {
    return (
        <div className='flex flex-wrap my-[5%] md:grid grid-cols-2 w-fit'>
            <div className='w-full h-fit float-left px-2'>
                <img src="https://media.istockphoto.com/id/149360161/photo/manicured-house-and-garden.jpg?s=612x612&w=0&k=20&c=QM7ussZ_9IjiMbUUIusbKmXNRgTYy__C1XpZnQx2BKQ=" alt="lawn-exmple" />
            </div>
            <p className='mb-10 pb-10 text-slate-100'>Top Flight Lawn Services is a trusted and reliable local lawn service company that specializes in providing high-quality lawn care solutions to residential and commercial customers. Our team of experienced professionals is passionate about creating and maintaining beautiful, healthy lawns that enhance the curb appeal of your property. We offer a wide range of services, including lawn mowing, tree trimming, gutter cleaning, weed control more. At Top Flight Lawn Services, we pride ourselves on delivering personalized and tailored services that meet the unique needs of each customer. Contact us today to get started and let us make your lawn the envy of the neighborhood!
                {/* <span className='text-5xl'>THIS WILL BE YOUR MISSION STATEMENT</span> */}
            </p>
        </div>
        // </div >
    )
}

export default About