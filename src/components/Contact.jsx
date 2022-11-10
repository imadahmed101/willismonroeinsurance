import React from 'react'
import {Box, Container, Typography, Button} from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'

const Contact = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", minHeight: "200px" }}>
    <Container sx={{ color: "black", textAlign: "center" }}>
        <Typography variant="h5" fontWeight="400">Want To Speak To A Rep?</Typography>
        <Button variant="contained" href="/contact" sx={{padding: "20px", borderRadius: "50px", background: `radial-gradient(at left, rgb(43, 116, 225) 0%, rgb(9, 48, 107) 100%)`, "&:hover": {background: `radial-gradient(at left, rgb(50, 123, 225) 0%, rgb(16, 55, 114) 100%)`}}}>Contact Us<KeyboardArrowRight /></Button>
    </Container>
  </Box>
  )
}

export default Contact