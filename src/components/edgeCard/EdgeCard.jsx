import './edgeCard.css';

const EdgeCard = ({title, description, image}) => {
  return (
    <div className='edge-card' style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <h1 data-aos="slide" data-aos-delay= "100" data-aos-deration ="1000">{title}</h1>
      <p data-aos="fad" data-aos-delay= "100" data-aos-deration ="1000">{description}</p>
      
    </div>
  )
}

export default EdgeCard
