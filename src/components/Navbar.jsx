import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, MenuItem, Menu, Container } from '@mui/material'
import { Menu as MenuIcon, Phone } from '@mui/icons-material'

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar elevation={0} position="static" sx={{ backgroundColor: "#fff", color: "black" }}>
      <Container sx={{ textAlign: "right" }}>
        <Button href="tel:+1-416-609-9500" sx={{ color: "black", marginTop: "10px", "&:hover": { color: "blue" } }}>
          <Phone />
          <Typography>416-609-9500</Typography>
        </Button>
      </Container>

      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Typography variant="h6" component="a" href="/" sx={{ color: "black", textDecoration: "none" }}>
          Willis & Monroe Associates
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "5px" }}>
          <MenuItem component="a" href="/" sx={{ "&:hover": { borderBottom: "1px black solid", background: "white" } }}>Home</MenuItem>
          <MenuItem component="a" href="/services" sx={{ "&:hover": { borderBottom: "1px black solid", background: "white" } }}>Services</MenuItem>
          <MenuItem component="a" href="/contact" sx={{ "&:hover": { borderBottom: "1px black solid", background: "white" } }}>Contact</MenuItem>
          <MenuItem component="a" href="/quote" sx={{ backgroundColor: "black", color: "white", marginLeft: "5px", borderRadius: "25px", "&:hover": { background: "#262626" } }}>Quote</MenuItem>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={(e) => setOpen(true)} >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>

        <Menu
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem component="a" href="/">Home</MenuItem>
          <MenuItem component="a" href="/services">Services</MenuItem>
          <MenuItem component="a" href="/contact">Contact</MenuItem>
          <MenuItem component="a" href="/quote" sx={{ bgcolor: "black", borderRadius: "25px", color: "white", "&:hover": { backgroundColor: "#262626" } }}>Quote</MenuItem>
        </Menu>

      </Toolbar>

    </AppBar>



  );
}
export default Navbar