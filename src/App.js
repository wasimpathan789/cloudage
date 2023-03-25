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
import EdgePage from './pages/edgepage/EdgePage';
import DataWareHousePage from './pages/datawarehousepage/DataWareHousePage';
import AiPage from './pages/AIpage/AiPage';
import AzureMicrosoftPage from './pages/futuristicPages/azureMicrosoftPage/AzureMicrosoftPage';
import CloudPage from './pages/cloudpage/CloudPage';
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
        <Route path="/edge" element = {<EdgePage/>}/>
        <Route path="/datawarehouse" element = {<DataWareHousePage/>}/>
        <Route path="/ai" element = {<AiPage/>}/>
        <Route path="/cloud" element = {<CloudPage/>}/>

        <Route path="/azuremicrosoft" element = {<AzureMicrosoftPage/>}/>










      </Routes>

    </BrowserRouter>
  );
}

export default App;
