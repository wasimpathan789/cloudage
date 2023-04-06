import "./futuristicCard.css"

const FuturisticCard = ({image, title, description}) => {
  return (
    <div className='futuristic-card' style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
    <h1 data-aos="fade-right" data-aos-duration= "1500" data-aos-deration ="1000">{title}</h1>
    <p data-aos="fade-left" data-aos-duration= "1500" data-aos-deration ="1000">{description}</p>
    
  </div>
  )
}

export default FuturisticCard
