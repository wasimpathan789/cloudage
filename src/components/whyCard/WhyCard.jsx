import"./whyCard.css"
import { Link } from "react-router-dom"

const WhyCard = ({title,description, url}) => {
  return (
    <div className="whyCard"  data-aos="flip-up" data-aos-duration="2000" >
        <h1  data-aos="flip-left" data-aos-duration="2000">{title}</h1>
        <p>{description}</p>
        <button  data-aos="flip-left"  data-aos-duration="2000" ><Link to={url}> KNOW MORE</Link></button>
      
    </div>
  )
}

export default WhyCard
