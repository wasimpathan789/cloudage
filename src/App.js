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
import Navbar2 from './Navbar2/Navbar2';
function App() {
  return (
   
    <BrowserRouter>
    <Navbar2/>
     <Hero/>
     <Why/>
     <Deliver/>
     {/* <Affiliation/> */}
     <Work/>
     <Footer/>

      <Routes>
        {/* <Route path='/comp1' element = {<Comp1/>}/>
        <Route path='/comp2' element = {<Comp2/>}/> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;
