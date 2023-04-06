import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./aluminiPage.css";
import HeroCard from "../../components/heroCard/HeroCard";
import Office from "../../assets/office.jpg";
import Meeting from "../../assets/office.jpg";
import Meetings from "../../assets/abcd.webp";
import Slider1 from "../../components/slider1/Slider1";
import cap from "../../assets/alumini/capgemini.jpg";
import accenture from "../../assets/alumini/accenture.jpg";
import adzapier from "../../assets/alumini/adzaiper.jpg";
import affine from "../../assets/alumini/affine.jpg";
import amazon from "../../assets/alumini/amazon.jpg";
import as from "../../assets/alumini/as.jpg";
import sak from "../../assets/alumini/sak.jpg";
import sete from "../../assets/alumini/sete.jpg";
import smart from "../../assets/alumini/smart.jpg";
import { useState, useEffect } from "react";
import Arrows from "../../components/slider1/Arrows";
import SliderContent from "../../components/slider1/SliderContent";

const AluminiPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImage = [
    { urls: `${cap}` },
    { urls: `${accenture}` },
    { urls: `${adzapier}` },
    { urls: `${affine}` },
    { urls: `${as}` },
    { urls: `${amazon}` },
    { urls: `${sak}` },
    { urls: `${sete}` },
    { urls: `${smart}` },
  ];
  const length = sliderImage.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div>
      <Navbar />
      <HeroCard
        image={Office}
        title={"Welcome To The Open-Human Resource Community!"}
        description={
          "We believe in Cooperation and work as Community across the globe."
        }
      />
      <div className="aluminipage">
        <div className="alumini-mission">
          <div className="alumini-mission-left">
            <h1>Our Mission</h1>
            <p>
              To train professionals build a great and better future. Our
              mission encourages young individuals to stand best in the market
              of ever-increasing technology.
            </p>
          </div>
          <div className="alumini-mission-right">
            <video controls>
              {/* <source src="..Videos/video1.mp4" type="video/mp4"/> */}
              <source
                src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/CloudAge-Alumni.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div
        className="alumini-card"
        style={{ backgroundImage: `url(${Meetings})` }}
      >
        <h1>
          "CloudAge is a community that focuses on a different and great kind of
          future ahead. You leave CloudAge as a different person and a better
          person than when you joined before"
        </h1>
        {/* <div className="overlay"></div> */}
      </div>
      <div className="alumini-slider">
        <h1>We Train Employees That Work Globally</h1>
        <div className="slider-container">
          {/* <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} /> */}
              <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slidess active" : "inactive"}
        >
          <img className="slide-images" src={slide.urls} alt="" />
        </div>
      ))}
    </section>
          <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AluminiPage;
