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
        <Route path="/about" element = {<ServicePage/>}/>
        <Route path="/service" element = {<ServicePage/>}/>
        <Route path="/alumini" element = {<ServicePage/>}/>
        <Route path="/contact" element = {<ServicePage/>}/>



      </Routes>

    </BrowserRouter>
  );
}

export default App;
