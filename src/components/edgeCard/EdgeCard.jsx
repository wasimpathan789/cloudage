import './edgeCard.css';

const EdgeCard = ({title, description, image}) => {
  return (
    <div className='edge-card' style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <h1 data-aos="fade-left"
     data-aos-duration="2000">{title}</h1>
      <p data-aos="fade-right"
     data-aos-duration="2000">{description}</p>
      
    </div>
  )
}

export default EdgeCard
