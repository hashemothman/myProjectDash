import React from 'react'
import UpdateBtn from './../../../../assets/actions/update.png';
import DeleteBtn from './../../../../assets/actions/delete.png';
import person from './../../../../assets/icons/person.png';

import "./PermissionCard.css"

type TStatus = {
    name: string,
}

const PermissionCard:React.FC<TStatus> = ({name}) => {
  return (
    <div className="permission-item">
    <div className='permission-card'>
      <div className="permission-info">
        <div className="permission-image">
          <img src={person} alt=''/>
        </div>
        <div className="permission-details">
          <p>{name}</p>
        </div>
      </div>
      <div className="actions">
        <img src={UpdateBtn} alt="update" />
        <img src={DeleteBtn} alt="delete" />
      </div>
    </div>
  </div>
  )
}

export default PermissionCard