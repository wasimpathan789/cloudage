import"./dropdown.css"
import { useState } from "react";
import { Link,} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AiPage from "../../pages/AIpage/AiPage";

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    const handleMenuOne = () => {
        // do something
        setOpen(false);
      };
    
      const handleMenuTwo = () => {
        // do something
        setOpen(false);
      };
  return (
    <div className="dropdown">
    <span onClick={handleOpen}>Futuristic Technologies <KeyboardArrowDownIcon/></span>
    {open ? (
      <ul className="menu">
        <li className="menu-item">
        < Link to={"/awsml"}  className="future-link">AWS ML</Link>
        </li>
        <li className="menu-item">
        < Link to={"/azureml"}  className="future-link">Azure ML</Link>
        </li>
        <li className="menu-item">
        <Link to={"/gcpml"} className="future-link"> GCP ML</Link>
        </li>
        <li className="menu-item">
        <Link to={"/hadoop"} className="future-link"> Hadoop as a service</Link>
        </li>
        <li className="menu-item">
        <Link to={"/emr"} className="future-link">EMR</Link>
        </li>
        <li className="menu-item">
        <Link to={"/hdinsight"} className="future-link"> HDInsight</Link>
        </li>
        <li className="menu-item">
        <Link to={"/bigquery"} className="future-link">BigQuery</Link>
        </li>
        <li className="menu-item">
        <Link to={"/dataasa"} className="future-link">Data as a service</Link>
        </li>
        <li className="menu-item">
        <Link to={"/apache"} className="future-link">Apache Spark</Link>
        </li>
        <li className="menu-item">
        <Link to={"/h2o"} className="future-link">H2O</Link>
        </li>
        <li className="menu-item">
        <Link to={"/artificial"} className="future-link">ARtificial Intelligence</Link>
        </li>
        <li className="menu-item">
        <Link to={"/databricks"} className="future-link">Data Bricks</Link>
        </li>
        <li className="menu-item">
        <Link to={"/amazonaws"} className="future-link">AWS Amazon</Link>
        </li>
        <li className="menu-item">
        {/* <Route path="/ai" element = {<AiPage/>}/> */}
        <Link to={"/azuremicrosoft"} className="future-link"> Azure (Microsoft)</Link>
        </li>
        <li className="menu-item">
        <Link  to={"/gcpgoogle"}className="future-link"> GCP (Google)</Link>
        </li>



      </ul>
    ) : null}
    {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
  </div>
  )
}

export default Dropdown
