import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Error from './pages/Error'
import Services from './pages/Services'
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import HomeInsurance from './pages/HomeInsurance';
import AutoInsurance from './pages/AutoInsurance';
import CommercialInsurance from './pages/CommercialInsurance';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/autoinsurance" element={<AutoInsurance/>}/>
          <Route path="/homeinsurance" element={<HomeInsurance/>}/>
          <Route path="/commercialinsurance" element={<CommercialInsurance/>}/>
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
export default App;
