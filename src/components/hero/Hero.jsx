import "./hero.css";
import Img from '../../assets/office.jpg'

const Hero = () => {
  return (
    <div className="hero"  style={{backgroundImage: `url(${Img})`, width: "auto", backgroundSize:"cover"}}>
      <div className="overlay"></div>
      <h1> Welcome To The World of Opportunities !</h1>
      <h2>Enable the AI-first Enterprise with CloudAge</h2>
    </div>
  );
};

export default Hero;
