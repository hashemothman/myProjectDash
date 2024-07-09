import { FaEye } from "react-icons/fa";
import { MdOutlinePrint } from "react-icons/md";
import './ReportItem.css'
import PopUpFilter from "../Filter/PopUpFilter";
import { useState } from 'react';

const ReportItem = (props: { title: string, description: string }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFilterClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="ho-report-item" >
      <div className="ho-report-item-text">
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
      </div>
      <div className="ho-report-item-icons">
        <div onClick={handleFilterClick}>
          <FaEye />
        </div>
        <div>
          <MdOutlinePrint />
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay" style={{position:'absolute',top:'100%', right:'50%'}}>
          <div className="popup-content">
            <PopUpFilter />
            <button onClick={handleFilterClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportItem