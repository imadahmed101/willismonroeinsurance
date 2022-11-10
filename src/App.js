import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Error from './pages/Error'
import Services from './pages/Services'
import Contact from './pages/Contact';
import Quote from './pages/Quote';


function App() {

  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App;
