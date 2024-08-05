import React from 'react'
import "./IncoiceStatus.css"
type TStatus = {
    value: number,
    icon : any,
    title : string,
    date : string,
}
const IncoiceStatus:React.FC<TStatus>  = ({value,icon,title,date}) => {
    return (
        <div className='invoice-status'>
            <div className='status-header'>
                <div className="status-icon">{icon}</div>
                <div className="status-title">
                    <div className="title">
                        {title}
                    </div>
                    <div className="date">
                        {date}
                    </div>
                </div>
            </div>
            <p className='status-value'>
                {value}
            </p>
        </div>
    )
}

export default IncoiceStatus
