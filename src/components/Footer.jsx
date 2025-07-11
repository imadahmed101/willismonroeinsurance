import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#123654] py-8'>
      <div className='max-w-[800px] mx-auto flex flex-col md:flex-row px-4 md:px-0 text-gray-300'>
        <div className='flex-1'>
          <Link to='/' className='text-lg font-semibold'>Willis & Monroe Associates</Link>
          <p>102-1691 McCowan Road</p>
          <p>Scarborough, ON, M1S 2Y3</p>
          <div><a href="tel:+1-416-609-9500">416-609-9500</a></div>
          <div><a href="mailto:info@willismonroeinsurance.com">info@willismonroeinsurance.com</a></div>
          <p>Mon-Fri 9AM-5PM</p>
        </div>
        <div className='flex-1 flex flex-col my-4 md:my-0 md:text-center'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/quote'>Quote</Link>
        </div>
        <div className='flex-1 flex flex-col md:text-center'>
          <Link to='/autoinsurance'>Auto Insurance</Link>
          <Link to='/homeinsurance'>Home Insurance</Link>
          <Link to='/commercialinsurance'>Commercial Insurance</Link>
          <Link to='/quote'>Get Quote</Link>
        </div>
      </div>
      <p className='text-gray-300 text-center mt-4'>Copyright 2024 Willis & Monroe Associates</p>
    </div>
  )
}

export default Footer