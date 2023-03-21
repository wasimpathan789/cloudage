import"./corporateCard.css"
import SchoolIcon from '@mui/icons-material/School';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PersonIcon from '@mui/icons-material/Person';

const CorporateCard = ({icon,title,description}) => {
  return (
    <div className="corporate-card-container">
        <div className="card-icon">
            {icon}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
 
    </div>
  )
}

export default CorporateCard
