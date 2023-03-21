import"./knowProduct.css"

const KnowProduct = ({icon, title, description}) => {
  return (
    <div className="know-product">
        <div className="know-product-top">
            {icon}
            <span> {title}</span>

        </div>
        <div className="know-product-bottom">
            {description}
        </div>


      
    </div>
  )
}

export default KnowProduct
