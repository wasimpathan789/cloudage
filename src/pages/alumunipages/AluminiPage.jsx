import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./aluminiPage.css";
import HeroCard from "../../components/heroCard/HeroCard";
import Office from "../../assets/office.jpg";
import Meeting from '../../assets/office.jpg'
import Meetings from '../../assets/abcd.webp'

const AluminiPage = () => {
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
      <div className="alumini-card" style={{backgroundImage:`url(${Meetings})`}}>
          <h1>
            "CloudAge is a community that focuses on a different and great kind
            of future ahead. You leave CloudAge as a different person and a
            better person than when you joined before"
          </h1>
          {/* <div className="overlay"></div> */}
        </div>

      <Footer />
    </div>
  );
};

export default AluminiPage;
