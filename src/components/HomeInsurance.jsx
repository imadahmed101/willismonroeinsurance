import React from 'react'
import { Link } from 'react-router-dom'

const HomeInsurance = () => {
  return (
    <div className='mb-12'>
    <h3 className='text-4xl font-semibold mb-4'><Link to={'/homeinsurance'}>Home Insurance</Link> </h3>
    <Link to='/homeinsurance'>

    <div className='overflow-hidden mb-4'>
      <picture>
        <source type='image/webp' srcSet="/house.webp" />
        <img src="/house.jpg" alt='Front view of a home on a lake.' className='h-[200px] md:h-[300px] lg:h-[400px] w-full object-cover' />
      </picture>
    </div>
    </Link>
    <Link to='/homeinsurance' className='inline-flex bg-black text-white md:text-lg px-2 py-4 rounded-xl hover:bg-gray-800'>
      Home Insurance
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-8 md:h-6 my-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>

    </Link>

  </div>
  )
}

export default HomeInsurance