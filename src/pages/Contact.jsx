import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { AccessTime, Email, EmailOutlined, Phone, Public } from '@mui/icons-material';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_MY_SERVICE_KEY, process.env.REACT_APP_MY_CONTACT_KEY, form.current, process.env.REACT_APP_MY_API_KEY)
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
              <EmailOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact Us
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
                sx={{ mt: 3, mb: 2, bgcolor: "#000", "&:hover": { bgcolor: "#262626" } }}
              >
                Send Message
              </Button>

            </Box>
          </Box>

          <Box sx={{mt: "40px", mb: "50px"}}>
            <Container>

            <Typography><Public /> 102-1691 McCowan Road</Typography>
            <Typography sx={{ marginLeft: "30px" }}>Scarborough, On, M1S 2Y3</Typography>
            <Typography><Phone /> 416-609-9500</Typography>
            <Typography><Email /> info@willismonroeinsurance.com</Typography>
            <Typography><AccessTime /> Monday - Friday 9AM-5PM</Typography>
            </Container>
          </Box>

          <Box sx={{ textAlign: "center", mb: "20px"}}>
            <iframe
              style={{
                width: "300px",
                height: "400px"
              }}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=102-1691%20McCowan%20Road%20Scarborough,%20ON,%20M1S%202Y3&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </Box>
        </Container>

      </Container>
    </Box>
  );
};
export default Contact
