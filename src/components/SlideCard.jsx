import React from 'react'

function SlideCard({ data }) {
    return (
        <div className=''>
            <div className='text-center p-10 rounded-xl mb-10 shadow-yellow-300 text-slate-100 shadow-xl hover:shadow-yellow-100'>
                <p className='italic'>"{data.review}"</p>
                <p className=''>-{data.name}</p>

            </div>
        </div>
    )
}

export default SlideCard