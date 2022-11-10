import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'

const HomeInsurance = () => {
  return (
    <Box>
      <Container sx={{ mt: "50px", mb: "50px" }}>
        <Typography variant="h4" fontWeight="600">Home Insurance</Typography>
      <Container sx={{
        backgroundImage: `url("./house.jpg")`,
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: { xs: "200px", sm: "300px", md: "400px" }
      }}>
      </Container>
        <br /><Typography variant="p" >Having a roof over your head is a necessity, keeping a roof over your head is our goal. We take care of all Home and property insurance needs.</Typography>
        <br /><br /><Button variant="contained" href="/quote" sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "black", padding: "20px", borderRadius: "15px", "&:hover": { backgroundColor: "#262626" } }}>Get Home Insurance Quote<KeyboardArrowRight /></Button>
        <Button variant="contained" href="/quote" sx={{ display: { xs: "flex", md: "none" }, backgroundColor: "black", padding: "20px", borderRadius: "15px", "&:hover": { backgroundColor: "#262626" } }}>Get Quote<KeyboardArrowRight /></Button>
      </Container>
    </Box>
  )
}

export default HomeInsurance