import React from 'react'
import "./InvoiceStatistics.css"
type TStatistics = {
    color: string;
    title: string;
    value: number
}
const InvoiceStatistics:React.FC<TStatistics>  = ({color,title,value}) => {
    return (
        <div className='InvoiceStatistics'>
            <div className='header'>
                <div className="color" style={{ backgroundColor:color }}></div>
                <div className="title">{title}</div>
            </div>
            <p className='statistics-percent'>
                {value}%
            </p>
        </div>
    )
}

export default InvoiceStatistics
