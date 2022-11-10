import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'


const Error = () => {
  return (
    <Box>
        <Container>
            <Typography>Error page not found. Please return to <Link href="/">home page</Link>.</Typography>
        </Container>   
    </Box>
    )
}

export default Error