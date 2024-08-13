import React from 'react'
import UpdateBtn from './../../../../assets/actions/update.png';
import DeleteBtn from './../../../../assets/actions/delete.png';
import person from './../../../../assets/icons/person.png';

import "./PercentCard.css"

type TStatus = {
    value: number,
    coin:string,
    operation:string
}

const PercentCard:React.FC<TStatus> = ({value,coin,operation}) => {
  return (
    <div className="percent-item">
    <div className='percent-card'>
      <div className="percent-info">
        <div className="percent-image">
          <img src={person} alt=''/>
        </div>
        <div className="percent-details">
          <p>النسبة: {value} %</p>
          <p>العملة: {coin} </p>
          <p>العملية: {operation} </p>
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

export default PercentCard