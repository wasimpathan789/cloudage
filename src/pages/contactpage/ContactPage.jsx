import "./contactPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroCard from "../../components/heroCard/HeroCard";
import office from "../../assets/office.jpg";
import { Form } from "react-router-dom";
import ContactForm from "../../components/contactForm/ContactForm";
import Barcode from '../../assets/barcode.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();

  },[])
  return (
    <div>
      <Navbar />
      <div className="contactpage">
        <HeroCard
          image={office}
          title={"Contact Page"}
          description={`Accelerating enterprise-class data management innovation. At CloudAge, we believe that data can make what is impossible today, possible tomorrow.`}
        />

        <div className="cotact-info">
          <div className="footer-top-right contact-info-left">
            <h2 className="contact-info-headline">Contact info</h2>
            <div className="dash">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="contact-address">
              <h1>Address</h1>
              <p>
                Clover Hills Plaza, 9th Floor NIBM Undri Road, Mohammad Wadi,
                Kondhwa, Pune, Maharashtra-411048
              </p>
            </div>
            <div className="contact-phone">
              <h1>Phone</h1>
              <p>+91-976-406-3368</p>
            </div>
            <div className="contact-email">
              <h1>Email</h1>
              <p>info@cloudage.co.in</p>
            </div>

            <h1>Scan the code below to start a WhatsApp chat with CloudAge.</h1>
            <div className="barcode" data-aos="slide-left" data-aos-delay= "100" data-aos-deration ="1000">
              <img src={Barcode} alt="" />
            </div>
          </div>
          <div className="contact-info-right">
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
