import"./whyCard.css"

const WhyCard = ({title,description}) => {
  return (
    <div className="whyCard">
        <h1>{title}</h1>
        <p>{description}</p>
        <button>KNOW MORE</button>
      
    </div>
  )
}

export default WhyCard
