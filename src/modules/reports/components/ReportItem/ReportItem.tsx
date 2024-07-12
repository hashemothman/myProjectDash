import { FaEye } from "react-icons/fa";
import { MdOutlinePrint } from "react-icons/md";
import './ReportItem.css'
import PopUpFilter from "../Filter/PopUpFilter";
import {  useState } from 'react';
import { IoIosClose } from "react-icons/io";


const ReportItem = (props: { title: string, description: string }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleFilterClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
    <div className="ho-report-item" onClick={handleFilterClick} style={{pointerEvents:showPopup?'none':'auto'}}>
      
      <div className="ho-report-item-text" >
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="ho-report-item-icons">
        <div >
          <FaEye  />
        </div>
        <div>
          <MdOutlinePrint onClick={handleFilterClick}/>
        </div>
      </div>
      
    </div>
    {showPopup && (
      <div className="ho-popup-section">
      <div className="popup-overlay" >
        <div className="popup-content">
          <div className="ho-close-icon">
          <IoIosClose onClick={handleFilterClick} style={{ cursor: 'pointer'}}/>
          </div>
        
          <PopUpFilter />
        </div>
      </div>
      </div>
    )}
    </>
  )
}

export default ReportItem