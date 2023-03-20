import"./deliver.css"
import Network from "../../assets/network.png"
import Security from "../../assets/security.png"
import Open from "../../assets/open.png"
import AnyCloud from "../../assets/anycloud.png"


const Deliver = () => {
  return (
    <div className="deliver">
        <h1>We deliver an enterprise data cloud for any data, anywhere, from the Edge to AI.</h1>
        <div className="deliver-images">
          <div className="deliver-image">
          <img src={Network} alt="" />
          <span>Network</span>
          </div>

          <div className="deliver-image">
          <img src={Security} alt="" />
          <span>Network</span>
          </div>

          <div className="deliver-image">
          <img src={Open} alt="" />
          <span>Network</span>
          </div>

          <div className="deliver-image">
          <img src={AnyCloud} alt="" />
          <span>Network</span>
          </div>
          
{/*            
            <img src={Security} alt="" />
            <img src={Open} alt="" />
            <img src={AnyCloud} alt="" /> */}
        </div>
      
    </div>
  )
}

export default Deliver
