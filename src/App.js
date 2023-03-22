import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero'
import Affiliation from './components/affiliation/Affiliation';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import Deliver from './components/deliver/Deliver';
import Why from './components/why/Why';
import Swiper from './swiper/Swiper';
import Navbar from './components/navbar/Navbar';
import ServicePage from './pages/servicepage/ServicePage';
import HomePage from './pages/homepage/HomePage';
import CorporatePage from './pages/corporatepage/CorporatePage';
import AboutPage from './pages/aboutpage/AboutPage';
import ContactPage from './pages/contactpage/ContactPage';
import AluminiPage from './pages/alumunipages/AluminiPage';
function App() {
  return (
   
    <BrowserRouter>
    {/* <Navbar/>
     <Hero/>
     <Why/>
     <Deliver/> */}
     {/* <Affiliation/> */}
     {/* <Work/>
     <Footer/> */}

      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/about" element = {<AboutPage/>}/>
        <Route path="/service" element = {<ServicePage/>}/>
        <Route path="/contact" element = {<ContactPage/>}/>
        <Route path="/corporate" element = {<CorporatePage/>}/>
        <Route path="/alumini" element = {<AluminiPage/>}/>






      </Routes>

    </BrowserRouter>
  );
}

export default App;
