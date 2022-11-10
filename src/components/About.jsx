import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material'
import { AttachMoney, Diversity3, Groups, SupportAgent, Tune, Verified } from '@mui/icons-material'
import React from 'react'

const About = () => {
  return (

    <Box mt={5}>

      <Grid container gap={5} sx={{justifyContent: {xs: "space-evenly" , md: "center"}}}>
        <Grid item xs={10} md={5}>
          <Card sx={{ width: "cover", minHeight: {xs:"200px", sm:"175px", md:"200px", lg:"175px"}, border: "1px solid grey" }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "blue"}}>
                <Groups />
              </Avatar>
              <Typography variant="h5" component="div">
                IBAO Member
              </Typography>
              <Typography variant="body2">
                Willis & Monroe Associates is an independent insurance brokerage and a member of the IBAO.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10} md={5}>
          <Card sx={{ width: "cover", minHeight: {xs:"200px", sm:"175px", md:"200px", lg:"175px"}, border: "1px solid grey" }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "green" }}>
                <AttachMoney />
              </Avatar>
              <Typography variant="h5" component="div">
                Savings
              </Typography>
              <Typography variant="body2">
                Our firm is able to deliver quality insurance products matched to your needs by our brokers with the biggest cost savings to you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={5}>
          <Card sx={{ width: "cover", minHeight: {xs:"200px", sm:"175px", md:"200px", lg:"175px"}, border: "1px solid grey" }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "orange" }}>
                <Diversity3 />
              </Avatar>
              <Typography variant="h5" component="div">
                Network
              </Typography>
              <Typography variant="body2">
                As a member of the Willis Canada group we are able to shop around with an extensive line of carriers to deliver to you the best product at the lowest cost.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={5}>
          <Card sx={{ maxWidth: "cover", minHeight: {xs:"200px", sm:"175px", md:"200px", lg:"175px"}, border: "1px solid grey" }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "blue" }}>
                <Verified />
              </Avatar>
              <Typography variant="h5" component="div">
                Dedicated
              </Typography>
              <Typography variant="body2">
                Young firm that is staffed with seasoned professionals carrying extensive experience in the Insurance industry at both the retail and corporate level.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={5}>
          <Card sx={{ maxWidth: "cover", minHeight: {xs:"200px", sm:"175px", md:"200px", lg:"175px"}, border: "1px solid grey" }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "green" }}>
                <Tune />
              </Avatar>
              <Typography variant="h5" component="div">
                Custom Policy
              </Typography>
              <Typography variant="body2">
                We are able to concentrate on our clients individual  needs and custom tailor  solutions that will surpass your expectations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={5}>
          <Card sx={{ maxWidth: "cover", minHeight: {xs:"200px", sm:"175px", md:"200px", lg:"175px"}, border: "1px solid grey" }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "orange" }}>
                <SupportAgent />
              </Avatar>
              <Typography variant="h5" component="div">
                Let's Talk
              </Typography>
              <Typography variant="body2">
                Contact us to discuss your insurance needs. We invite you to call our office for a no obligation consultation to see how we can help you insure the things that matter most.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


    </Box>

  )
}

export default About