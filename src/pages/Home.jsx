import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Links from '../components/Links'
import About from '../components/About'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <Hero/>
      <Links/>
      <About/>
      <Contact/>
    </Box>
  )
}

export default Home