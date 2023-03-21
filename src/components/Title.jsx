import React from 'react'

function Title() {
    return (
        <div className='w-full font-poppins pb-6'>
            <h1 className='p-1 font-cursive text-4xl text-center shadow-md shadow-amber-300 text-slate-100'>Call Us & Get A Free Quote!</h1>
            <ul className='flex gap-4 justify-center text-slate-100 font-sans p-4 text-centeli'>
                <li>Shrub Trimming</li>
                <li>Tree Trimming</li>
                <li>Clean-up/Leaf Pick-up</li>
                <li>Gutter Cleaning</li>
            </ul>
            {/* <ul className='font-bold text-slate-100 grid grid-cols-4'>
                <li>-Shrub Trimming</li>
                <li>-Tree Trimming</li>
                <li>-Clean Up/Leaf Pick Up</li>
                {/* <li>-Clean Up/Leaf Pick Up</li> */}
            {/* <li>-Gutter Cleaning</li>
            </ul> */}
        </div>
    )
}

export default Title