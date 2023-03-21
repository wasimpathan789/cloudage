import"./heroCard.css"


const HeroCard = ({title, description, image}) => {
  return (
    <div style={{backgroundImage:`url(${image})`}} className="hero-card">
        {/* <img src={office} alt="" /> */}
        <h1>{title}</h1>
        <p>{description}</p>
      
    </div>
  )
}
 
export default HeroCard
