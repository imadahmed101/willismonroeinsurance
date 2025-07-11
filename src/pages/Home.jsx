import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Links from '../components/Links'
import About from '../components/About'
import Quote from '../components/Quote'


const Home = () => {
  return (
    <div>
      <Hero />
      <Links />
      <About />
      <Services />
      <div className='mb-8'>
        <h3 className='text-2xl md:text-4xl text-center mt-16 mb-8'>Lets Chat</h3>
        <Quote />
      </div>

    </div>
  )
}

export default Home