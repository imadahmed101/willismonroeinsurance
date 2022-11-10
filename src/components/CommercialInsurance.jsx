import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'

const CommercialInsurance = () => {
  return (
    <Box>
      <Container sx={{ mt: "50px", mb: "50px" }}>
        <Typography variant="h4" fontWeight="600">Commercial Insurance</Typography>
      <Container sx={{
        backgroundImage: `url("./biz.jpg")`,
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: { xs: "200px", sm: "300px", md: "400px" }
      }}>
      </Container>
        <br /><Typography variant="p" >Building up a business and keeping it there is an every day struggle. Let us show you how we can take away some of your stress by insuring your business and business property. We take care of all your Commercial insurance needs.</Typography>
        <br /><br /><Button variant="contained" href="/quote" sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "black", padding: "20px", borderRadius: "15px", "&:hover": { backgroundColor: "#262626" } }}>Get Commercial Insurance Quote<KeyboardArrowRight /></Button>
        <Button variant="contained" href="/quote" sx={{ display: { xs: "flex", md: "none" }, backgroundColor: "black", padding: "20px", borderRadius: "15px", "&:hover": { backgroundColor: "#262626" } }}>Get Quote<KeyboardArrowRight /></Button>
      </Container>
    </Box>
  )
}

export default CommercialInsurance