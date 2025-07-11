import React from 'react'
import AutoInsurance from '../components/AutoInsurance'
import CommercialInsurance from '../components/CommercialInsurance'
import HomeInsurance from '../components/HomeInsurance'

const Services = () => {
  return (
    <div className='pt-8'>

      <h2 className='text-2xl md:text-4xl text-center mb-8'>Services</h2>
      <div className='max-w-[1200px] px-4 mx-auto'>
        <AutoInsurance />
        <HomeInsurance />
        <CommercialInsurance />
      </div>
    </div>
  )
}

export default Services