import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const CommercialInsurance = () => {
  return (
    <div className='mb-12'>
    <h3 className='text-4xl font-semibold mb-4'><Link to={'/commercialinsurance'}>Commercial Insurance</Link> </h3>
    <Link to='/commercialinsurance'>

    <div className='overflow-hidden mb-4'>
      <picture>
        <source type='image/webp' srcSet="/business.webp" />
        <img src="/business.jpg" alt='View of office buildings in a city.' className='h-[200px] md:h-[300px] lg:h-[400px] w-full object-cover' />
      </picture>
    </div>
    </Link>
    <Link to='/commercialinsurance' className='inline-flex bg-black text-white md:text-lg px-2 py-4 rounded-xl hover:bg-gray-800'>
      Commercial Insurance
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-8 md:h-6 my-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>

    </Link>

  </div>
  )
}

export default CommercialInsurance