import { Work } from "@mui/icons-material"
import Deliver from "../../components/deliver/Deliver"
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import Why from "../../components/why/Why"
import"./homePage.css"
import Footer from '../../components/footer/Footer'
import img1 from '../../assets/accenture.png'
import img2 from '../../assets/infosys.png'
import img3 from '../../assets/hortonworks.png'
import img4 from '../../assets/capgemini.png'
import img5 from '../../assets/cognizant.png'
import img6 from '../../assets/schlumburger.png'
import aws from '../../assets/aws.png'
import google from '../../assets/google.png'
import microsoft from '../../assets/microsoft.png'
import Slider1 from "../../components/slider1/Slider1"


const HomePage = () => {
  return (
    <div className="homepage">
        <Navbar/>
        <Hero/>
        <Why/>
        <Deliver/>
        <div className="home-slider">
     <Slider1 image1={aws} image2={microsoft} image3={google}/>


        </div>
   
        <Work  image1={img1}  image2={img2}  image3={img3}  image4={img4} image5={img5}  image6={img6} title={"We Train Employees That Work Globally"}/>
        <Footer/>
      
    </div>
  )
}

export default HomePage
