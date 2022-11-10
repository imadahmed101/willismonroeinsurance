import { Box, Container, Typography, Avatar } from '@mui/material'
import React from 'react'
import AutoInsurance from '../components/AutoInsurance'
import CommercialInsurance from '../components/CommercialInsurance'
import HomeInsurance from '../components/HomeInsurance'
import { EnhancedEncryptionOutlined } from '@mui/icons-material'


const Services = () => {
  return (
    <Box>
        <Container>
            <Container maxWidth="xs">
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#000' }}>
              <EnhancedEncryptionOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{mb: "20px"}}>
              Our Services
            </Typography>
            </Box>
            </Container>
            <AutoInsurance/>
            <HomeInsurance/>
            <CommercialInsurance/>
        </Container>   
    </Box>
    )
}

export default Services