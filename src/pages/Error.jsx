import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className=' min-h-screen'>
            <h2 className='text-center text-xl py-8'>Error page not found. Please return to <Link to='/' className='underline'>home page</Link>.</h2>
            <img src='/404.png' alt='Animated person looking for lost page.' className='mx-auto' />
        </div>
    )
}
export default Error