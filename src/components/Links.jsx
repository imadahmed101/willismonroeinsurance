import React from 'react'
import { Box, Container, Typography, Button, Paper } from '@mui/material'
import { Calculate, DirectionsCar, HomeWork, Work } from '@mui/icons-material'

const Links = () => {
    return (
        <Box mt={5}>

            <Container sx={{ display: { xs: "block", md: "flex" }, justifyContent: "space-between", textAlign: "center", color: "#262626" }}>

                    <Button href="/services" >
                        <Paper variant="outlined" sx={{ width: "225px", "&:hover": {border: "1px solid black", color: "black"}}}>
                            <Container sx={{ textAlign: "center" }}>
                                <DirectionsCar sx={{ width: "75px", height: "75px" }} />
                                <Typography variant="h5" fontWeight="600">Auto<br/>Insurance</Typography>
                            </Container>
                        </Paper>
                    </Button>

                    <Button href="/services" >
                        <Paper variant="outlined" sx={{ width: "225px", "&:hover": {border: "1px solid black", color: "black"}}}>
                            <Container sx={{ textAlign: "center" }}>
                                <HomeWork sx={{ width: "75px", height: "75px" }} />
                                <Typography variant="h5" fontWeight="600">Home<br/>Insurance</Typography>
                            </Container>
                        </Paper>
                    </Button>

                    <Button href="/services">
                        <Paper variant="outlined" sx={{width: "225px", "&:hover": {border: "1px solid black", color: "black"}}}>
                            <Container sx={{ textAlign: "center" }}>
                                <Work sx={{ width: "75px", height: "75px" }} />
                                <Typography variant="h5" fontWeight="600">Commercial<br/>Insurance</Typography>
                            </Container>
                        </Paper>
                    </Button>

                    <Button href="/quote">
                        <Paper variant="outlined" sx={{ width: "225px", "&:hover": {border: "1px solid black", color: "black"}}}>
                            <Container sx={{ textAlign: "center" }}>
                                <Calculate sx={{ width: "75px", height: "75px" }} />
                                <Typography variant="h5" fontWeight="600">Request<br/>Quote</Typography>
                            </Container>
                        </Paper>
                    </Button>

            </Container>
        </Box>
    )
}

export default Links