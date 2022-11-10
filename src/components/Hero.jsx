import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'

const Hero = () => {
    return (
        <Box sx={{ backgroundImage: `url(/search.jpg)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight: "500px", color: "black", display: "flex", alignItems: "center", textAlign: {xs: "center", md: "center"}, borderRadius: "25px" }}>
            <Container sx={{display: {xs: "none", md: "block"}}}></Container>
            <Container>
                <Typography variant="h2" component="h1" fontWeight={600} sx={{display: {xs: "block", md: "block"}}}>Find The <span style={{background: `radial-gradient(at left, rgb(43, 116, 225) 0%, rgb(9, 48, 107) 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Perfect</span> Insurance Policy</Typography>
                <Button variant="contained" href="/quote" sx={{padding: "20px", borderRadius: "50px", background: `radial-gradient(at left, rgb(43, 116, 225) 0%, rgb(9, 48, 107) 100%)`, "&:hover": {background: `radial-gradient(at left, rgb(50, 123, 225) 0%, rgb(16, 55, 114) 100%)`}}}>Get Started<KeyboardArrowRight /></Button>
            </Container>
        </Box>
    )
}

export default Hero