import "./work.css"
import Accenture from '../../assets/accenture.png'
import Infosys from '../../assets/infosys.png'
import Hortonworks from '../../assets/hortonworks.png'
import Capgemini from '../../assets/capgemini.png'
import Cognizant from '../../assets/cognizant.png'
import Schlumburger from '../../assets/schlumburger.png'




const Work = () => {
  return (
    <div className="work">
        <h1>We Train Employees That Work Globally</h1>
        <div className="work-clients">
            <img src={Accenture}alt=""  style={{fill:"#54595f"}} />
            <img src={Infosys}alt="" />
            <img src={Hortonworks}alt="" />
            <img src={Capgemini}alt="" />
            <img src={Cognizant}alt="" />
            <img src={Schlumburger}alt="" />
      

        </div>
      
    </div>
  )
}

export default Work
