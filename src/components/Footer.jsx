import React from 'react'
import { Box, Typography, Container, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ color: "#262626", textAlign: "center" }}>
      <hr/>
      <Container sx={{ display: { xs: "block", md: "flex" }, textAlign: "left" }} >

        
        <Container>
          <Typography>
            <Link href="/" sx={{textDecoration: "none", color: "#262626"}}>Home</Link>
            </Typography>
            <Typography>
            <Link href="/services" sx={{textDecoration: "none", color: "#262626"}}>Services</Link>
            </Typography>
            <Typography>
            <Link href="/contact" sx={{textDecoration: "none", color: "#262626"}}>Contact</Link>
            </Typography>
            <Typography>
            <Link href="/quote" sx={{textDecoration: "none", color: "#262626"}}>Quote</Link>
            </Typography>
            <br />
        </Container>

        <Container>
          <Typography>
            <Link href="/services" sx={{textDecoration: "none", color: "#262626"}}>Services</Link>
            </Typography>
            <Typography>
            <Link href="/services" sx={{textDecoration: "none", color: "#262626"}}>Auto Insurance</Link>
            </Typography>
            <Typography>
            <Link href="/services" sx={{textDecoration: "none", color: "#262626"}}>Home Insurance</Link>
            </Typography>
            <Typography>
            <Link href="/services" sx={{textDecoration: "none", color: "#262626"}}>Commercial Insurance</Link>
            </Typography>
            <br />
        </Container>

        <Container>
          <Typography>102-1691 McCowan Road</Typography>
          <Typography>Scarborough, ON, M1S 2Y3</Typography>
          <Typography>
            <Link href="tel:+1-416-609-9500" sx={{textDecoration: "none", color: "#262626"}}>
            416-609-9500
            </Link>
          </Typography>
          <Typography>info@willismonroeinsurance.com</Typography>
          <Typography>Monday - Friday 9AM - 5PM</Typography>
          <br />
        </Container>
      </Container>
      <br />
      <Typography>Copyright 2022 Willis & Monroe Associates</Typography>
    </Box>
  )
}

export default Footer