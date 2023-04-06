import "./work.css"
// import Accenture from '../../assets/accenture.png'
// import Infosys from '../../assets/infosys.png'
// import Hortonworks from '../../assets/hortonworks.png'
// import Capgemini from '../../assets/capgemini.png'
// import Cognizant from '../../assets/cognizant.png'
// import Schlumburger from '../../assets/schlumburger.png'




const Work = ({title, image1,image2,image3,image4,image5,image6}) => {
  return (
    <>
       <div className="work">
        <h1 data-aos="zoom-in"
      data-aos-duration="2000">{title}</h1>
        <div className="work-clients">
            <img src={image1}alt=""  style={{fill:"#54595f"}}  data-aos="fade-right"
      data-aos-duration="2000" />
            <img src={image2}alt="" data-aos="fade-left"
      data-aos-duration="2000" />
            <img src={image3}alt=""  data-aos="fade-right"
      data-aos-duration="2000"/>
            <img src={image4}alt=""data-aos="fade-left"
      data-aos-duration="2000" />
            <img src={image5}alt="" data-aos="fade-right"
      data-aos-duration="2000" />
            <img src={image6}alt="" data-aos="fade-left"
      data-aos-duration="2000" />
      

        </div>
      
    </div>

    {/* <div className="work">
        <h1>We Train Employees That Work Globally</h1>
        <div className="work-clients">
            <img src={Accenture}alt=""  style={{fill:"#54595f"}} />
            <img src={Infosys}alt="" />
            <img src={Hortonworks}alt="" />
            <img src={Capgemini}alt="" />
            <img src={Cognizant}alt="" />
            <img src={Schlumburger}alt="" />
      

        </div>
      
    </div> */}
    </>
 
  )
}

export default Work
