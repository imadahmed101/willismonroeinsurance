import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'

const AutoInsurance = () => {
  return (
    <Box>

          <Container sx={{mt: "0px", mb: "50px"}}>
            <Typography variant="h4" fontWeight="600">Auto Insurance</Typography>
          <Container sx={{
            backgroundImage: `url("./car.jpg")`,
            backgroundAttachment: "scroll",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: {xs: "200px", sm: "300px", md:"400px"}
            }}>
          </Container>
            <br /><Typography variant="p" >Passion is needed to keep the drive alive. Our passion is exceeding our clients' expectations. We take care of all auto, bike, truck, boat, land and vehicle insurance needs.</Typography>
            <br /><br /><Button variant="contained" href="/quote" sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "black", padding: "20px", borderRadius: "15px", "&:hover": { backgroundColor: "#262626" } }}>Get Auto Insurance Quote<KeyboardArrowRight /></Button>
            <Button variant="contained" href="/quote" sx={{ display: { xs: "flex", md: "none" }, backgroundColor: "black", padding: "20px", borderRadius: "15px", "&:hover": { backgroundColor: "#262626" } }}>Get Quote<KeyboardArrowRight /></Button>
          </Container>
    </Box>
  )
}

export default AutoInsurance