import"./servicePage.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"
import ServiceCard from "../../components/serviceCard/ServiceCard"
import Work from '../../components/work/Work'
import img1 from '../../assets/tayyar.png'
import img2 from '../../assets/burj.png'
import img3 from '../../assets/etisalat.png'
import img4 from '../../assets/parkar.png'
import img5 from '../../assets/cognizant.png'
import img6 from '../../assets/teradata.png'
import img7 from '../../assets/bg3.jpeg'


const ServicePage = () => {
  return (
    <div className="service-container">
        <Navbar/>
        <div className="service-hero"  style={{backgroundImage: `url(${img7})`, width: "100%", backgroundSize:"cover"}}>
      <div className="overlay"></div>
      <h1> CloudAge Services</h1>
    </div>
       <div className="service-wrapper">

        <ServiceCard title={"IT Services"} cardText={"Our Services reduce the Total Cost of Ownership by a great deal and increase on Investment year on year, thus making your business grow more"}/>
        <ServiceCard title={"Project Mangement"} cardText={"We Plan, Organize, Coordinate, and Execute projects according to specific needs, within the allotted time period & agreed SOW / Milestones"}/>

        <ServiceCard title={"HR Services"} cardText={"We provide organizations with the required skillsets, augmented resource "}/>

        <ServiceCard title={"Corporate Training"} cardText={"ur Services reduce the Total Cost of Ownership by a great deal and increases on Investment year on year, thus making your business grow more"}/>

        <ServiceCard title={"Cyber Security Services"} cardText={"We help organizations identify, assess, measure, and manage operational and technology-related risks encountered in their business and assist in the implementation of the information security policies, processes, and risk mitigating controls"}/>
       </div>
       <Work  image1={img1}  image2={img2}  image3={img3}  image4={img4} image5={img5}  image6={img6} title={"We Train Employees That Work Globally"}/>
        <Footer/>
      
    </div>
  )
}

export default ServicePage
