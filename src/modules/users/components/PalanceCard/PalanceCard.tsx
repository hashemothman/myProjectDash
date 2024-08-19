
import { GoPlusCircle } from 'react-icons/go'
import './PalanceCard.css'

import { IoIosClose, IoMdRemoveCircleOutline } from 'react-icons/io'
import { useState } from 'react';

const PalanceCard = (props:{palance:any,image:string,name:string,title:string,palanceButton:string,widthCard?:string}) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleFilterClick = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className='ho-palance-user' style={{width:props.widthCard}}>
        <div className='ho-info-important'>
        <div className="ho-header-palance">
            <h1>{props.title}</h1>
            <p>{props.palance}</p>
        </div>
        <div className="ho-footer-palance">
        <img src={props.image} alt=""  />
        <p>{props.name}</p>
        </div>
        </div>
        {props.palanceButton =='yes'?<div className="ho-button-user-palance">
          <div className="ho-user-button-add" onClick={handleFilterClick}>
            <p>إضافة رصيد</p>
            <GoPlusCircle  size={20}  />
          </div>
          <div className="ho-user-button-minus">
            <p>سحب رصيد</p>
            <IoMdRemoveCircleOutline size={20}/>
          </div>
        </div>:null}
        {showPopup && (
      <div className="ho-popup-section">
      <div className="popup-overlay" >
        <div className="popup-content">
          <div className="ho-close-icon">
          <IoIosClose onClick={handleFilterClick} style={{ cursor: 'pointer'}}/>
          </div>
        <div className="ho-plus-palance">
          <h3>إضافة رصيد</h3>
          
        </div>
          
        </div>
      </div>
      </div>
    )}
    </div>
  )
}

export default PalanceCard