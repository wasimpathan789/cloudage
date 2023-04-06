import './edgeTopCard.css'

const EdgeTopCard = ({title}) => {
  return (
    <div className='edge-top-card' >
      <h1 data-aos="fade-right"
     data-aos-duration="2000">{title}</h1>
      
    </div>
  )
}

export default EdgeTopCard
