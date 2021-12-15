import React from 'react'

function Loading() {
    return (
        <div className="text-center mt-5">
            <span className="spinner-grow text-warning" role="status" aria-hidden="true" style={{ width: '3rem', height: '3rem' }}></span>
            <p className='mt-3'>Loading</p>
        </div>
    )
}

export default Loading
