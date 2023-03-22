import"./whyCard.css"
import { Link } from "react-router-dom"

const WhyCard = ({title,description, url}) => {
  return (
    <div className="whyCard">
        <h1>{title}</h1>
        <p>{description}</p>
        <button ><Link to={url}> KNOW MORE</Link></button>
      
    </div>
  )
}

export default WhyCard
