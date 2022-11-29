import { Box, Container, Typography, Grid, Button, TextField, Checkbox, Avatar, Link, FormControlLabel } from '@mui/material'
import { RequestQuoteOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Quote = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_MY_SERVICE_KEY, process.env.REACT_APP_MY_QUOTE_KEY, form.current, process.env.REACT_APP_MY_API_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <Box>
      <Container>
        <Container maxWidth="xs" sx={{border: "1px solid black", borderRadius: "25px"}}>
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#000' }}>
              <RequestQuoteOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Get Quote
            </Typography>
            <Box component="form" ref={form} onSubmit={sendEmail} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="user_name"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="user_lastname"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="user_email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="user_phone"
                    autoComplete="phone"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox name="auto" value="auto" color="primary" />}
                    label="Auto Insurance"
                  />
                  <FormControlLabel
                    control={<Checkbox name="home" value="home" color="primary" />}
                    label="Home Insurance"
                  />
                  <FormControlLabel
                    control={<Checkbox name="business" value="business" color="primary" />}
                    label="Commercial Insurance"
                  />
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    autoComplete="message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox name="contact_phone" value="phone" color="primary" />}
                    label="Contact Phone"
                  />
                  <FormControlLabel
                    control={<Checkbox name="contact_email" value="email" color="primary" />}
                    label="Contact Email"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                value="send"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#000", "&:hover": {bgcolor: "#262626"}}}
              >
                Request Quote
              </Button>
              <Grid container justifyContent="flex-end" sx={{mb: "20px"}}>
                <Grid item>
                  <Link href="/services" variant="body2">
                    Need more info? Check our services
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>



        </Container>
      </Container>
    </Box>
  )
}

export default Quote